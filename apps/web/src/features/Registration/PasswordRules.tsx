import PasswordRule from './PasswordRule.tsx';

type PasswordRulesProps = {
  password: string;
  confirmPassword: string;
};

export default function PasswordRules({ password, confirmPassword }: PasswordRulesProps) {
  const checks = {
    match: password === confirmPassword && password.length > 0,
    minLength: password.length >= 14,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    digit: /\d/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  return (
    <div className="mb-2 flex flex-col items-center text-xs">
      <PasswordRule valid={checks.match} text="Les mots de passe correspondent" />
      <p className="mt-2 mb-1 text-center">Le mot de passe doit contenir au moins :</p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        <PasswordRule valid={checks.minLength} text="14 caractères" />
        <PasswordRule valid={checks.lowercase} text="1 lettre minuscule" />
        <PasswordRule valid={checks.uppercase} text="1 lettre majuscule" />
        <PasswordRule valid={checks.digit} text="1 chiffre" />
        <PasswordRule valid={checks.specialChar} text="1 caractère spécial" />
      </div>
    </div>
  );
}
