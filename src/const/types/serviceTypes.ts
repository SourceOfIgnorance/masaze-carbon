export interface Service {
  image: object;          // URL of the service image
  alt: string;
  name: string;           // Name of the service
  price: string;          // Price of the service
  description: string;    // Description of the service
}

export interface ServiceCardProps {
  image: object;        // URL of the background image
  name: string;            // Service name
  price: string;           // Service price
  description: string;     // Short description of the service
}

export interface ServiceGridSectionProps {
  heading: string;        // Section heading
  descriptionSection: string;    // Section description
  services: Service[];    // List of services to display in the grid
}
