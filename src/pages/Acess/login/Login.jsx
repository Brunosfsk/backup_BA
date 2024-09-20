import { useContext, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth.jsx';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signed, error } = useContext(AuthContext);
  const { nameBussiness } = useParams();

  const login = async (e) => {
    e.preventDefault();
    await signIn({ email, password });
  };

  if (signed) return <Navigate to={`/${nameBussiness}/dashboard`} />;

  return (
    <div className="min-h-screen bg-base-200 w-vw">
      <div className="flex flex-col lg:flex-row-reverse w-full h-dvh">
        <div className="flex-1 flex justify-center items-center">
          <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
              <img
                src="/logoBA.png"
                alt="Bairro Ativo"
                className="w-24 md:w-32 self-center opacity-80"
              />
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="eu@exemplo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link
                  to={`/${nameBussiness}/cadastrar`}
                  className="text-xs text-muted-foreground"
                >
                  Não possui conta? Crie aqui!
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-start gap-0.5">
              {error && (
                <small className=" text-destructive">{error.error}</small>
              )}
              <Button className="w-full" onClick={login}>
                Acessar
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center lg:text-left bg-red-100 flex-1 bg-login bg-cover bg-center"></div>
      </div>
    </div>
  );
}

export default Login;
