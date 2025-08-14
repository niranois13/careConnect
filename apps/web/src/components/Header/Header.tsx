import AuthPanel from '../../features/Auth/components/AuthPanel.tsx';

export default function Header() {
  return (
    <header className="p-2 flex justify-around items-center bg-purple-100">
      <h1 className="text-xl font-bold">careConnect</h1>
      <AuthPanel />
    </header>
  );
}
