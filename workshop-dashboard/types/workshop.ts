export type RegistrationFormData = {
    fullName: string;
    email: string;
    githubUsername: string;

    workshopId: string;

    agreement: boolean;
}

export type Workshop = {
  id: number;
  title: string;
  price: number;
  capacity: number;
  scheduled_at: string;
  duration_minutes: number;
};

export type WorkshopRegistration = {
  id: number;
  full_name: string;
  email: string;
  github_username: string;

  workshop: Workshop;

  agreement: boolean;
  status: string;
  created_at: string;
};