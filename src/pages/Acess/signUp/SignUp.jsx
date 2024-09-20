import { Link, Navigate, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/auth';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signed } = useContext(AuthContext);
  const { nameBussiness } = useParams();

  if (signed) return <Navigate to="/" />;

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
                  label="Nome"
                  type="text"
                  placeholder="João Silva"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                  placeholder="*******"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link
                  to={`/${nameBussiness}/login`}
                  className="text-xs text-muted-foreground"
                >
                  Já possui uma conta? Clique aqui!
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-start gap-0.5">
              <Button className="w-full">Cadastrar</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center lg:text-left bg-red-100 flex-1 bg-signUp bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default SignUp;
