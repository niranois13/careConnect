type PasswordRuleProps = {
  valid: boolean;
  text: string;
};

export default function PasswordRule({ valid, text }: PasswordRuleProps) {
  return (
    <div className={`flex items-center space-x-1 ${valid ? 'text-green-700' : 'text-red-700'}`}>
      <span>{valid ? '✔️' : '❌'}</span>
      <span>{text}</span>
    </div>
  );
}
