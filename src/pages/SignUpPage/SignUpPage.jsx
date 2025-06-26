import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm';

const SignUpPage = () => {
  const handleSignUp = (data) => {
    console.log('Sign Up Data:', data);
    // викликати API /signup
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Реєстрація</h2>
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;