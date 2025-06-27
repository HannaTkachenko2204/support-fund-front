export interface SignInFormData {
    email: string;
    password: string;
  }
  
  export interface SignInFormProps {
    onSubmit: (data: SignInFormData) => void;
  }
  