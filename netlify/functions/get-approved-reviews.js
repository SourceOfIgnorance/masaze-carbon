import fetch from "node-fetch";

const NETLIFY_API_BASE = "https://api.netlify.com/api/v1";
const FORM_NAME = "user-review";
const MAX_SUBMISSIONS_PER_PAGE = 100;

export const handler = async (event) => {
  const token = process.env.NETLIFY_ACCESS_TOKEN;
  const siteId = process.env.NETLIFY_SITE_ID;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "NETLIFY_ACCESS_TOKEN environment variable is not set." }),
    };
  }

  if (!siteId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "NETLIFY_SITE_ID environment variable is not available." }),
    };
  }

  try {
    // Fetch all forms for the site
    const formsRes = await fetch(`${NETLIFY_API_BASE}/sites/${siteId}/forms`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!formsRes.ok) {
      throw new Error(`Failed to fetch forms: ${formsRes.status} ${formsRes.statusText}`);
    }

    const forms = await formsRes.json();

    // Find the form by name
    const form = forms.find((f) => f.name === FORM_NAME);
    if (!form) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `Form '${FORM_NAME}' not found.` }),
      };
    }

    // Fetch verified (approved) submissions for the form
    const submissionsRes = await fetch(
      `${NETLIFY_API_BASE}/forms/${form.id}/submissions?state=verified&per_page=${MAX_SUBMISSIONS_PER_PAGE}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!submissionsRes.ok) {
      throw new Error(`Failed to fetch submissions: ${submissionsRes.status} ${submissionsRes.statusText}`);
    }

    const submissions = await submissionsRes.json();

    // Map submissions to simplified review objects
    const reviews = submissions.map((submission) => {
      const data = submission.data || {};
      return {
        id: submission.id,
        name: data.name?.trim() || "Anonymous",
        rating: Number(data.rating) || 0,
        comment: data.comment?.trim() || "",
        email: data.email?.trim() || null,
        dateSubmitted: submission.created_at,
      };
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ reviews }),
    };
  } catch (error) {
    console.error("Error fetching approved reviews:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal server error." }),
    };
  }
};
