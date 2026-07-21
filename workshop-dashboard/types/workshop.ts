export type RegistrationFormData = {
  fullName: string;
  email: string;
  githubUsername: string;
  workshop: string;
  agreement: boolean;
};

export type WorkshopRegistration = {
  id: string;
  full_name: string;
  email: string;
  github_username: string;
  workshop: string;
  agreement: boolean;
  status: string;
  created_at: string;
};