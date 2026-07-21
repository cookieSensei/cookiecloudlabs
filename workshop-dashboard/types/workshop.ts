export type RegistrationFormData = {
  fullName: string;
  email: string;
  githubUsername: string;
  workshop: string;
  agreement: boolean;
};

export type WorkshopRegistration = {
  id: number;
  full_name: string;
  email: string;
  github_username: string;
  workshop: string;
  agreement: boolean;
  created_at: string;
};