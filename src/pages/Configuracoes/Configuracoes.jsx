import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { UploadCloud } from "lucide-react"
import NavBar from "../Dashboard/Navbar/Navbar"

const Configuracoes = () => {
  const [formValues, setFormValues] = useState({
    nomeComercio: "",
    email: "",
    bio: "",
    logotipo: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setFormValues({ ...formValues, logotipo: file })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    // Aqui vai a lógica de envio do formulário
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <NavBar title="Meu perfil" />
      {/* w-11/12 p-6 bg-white shadow rounded-lg flex-grow */}
      <Card className="w-11/12 mx-auto p-6 -mt-24">
        <CardHeader>
          <CardTitle>Minhas informações</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="logotipo">Logotipo do Comércio</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <UploadCloud className="w-6 h-6 text-gray-500" />
                    <span className="text-sm text-gray-500">Subir logotipo</span>
                    <input
                      type="file"
                      name="logotipo"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {formValues.logotipo && (
                    <span className="text-sm text-gray-600">
                      {formValues.logotipo.name}
                    </span>
                  )}
                </div>
              </div>

              <div className="w-1/3">
                <Label htmlFor="nomeComercio">Nome do Comércio</Label>
                <Input
                  id="nomeComercio"
                  name="nomeComercio"
                  value={formValues.nomeComercio}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do comércio"
                  required
                />
              </div>

              <div className="w-1/3">
                <Label htmlFor="nomeComercio">Endereço</Label>
                <Input
                  id="nomeComercio"
                  name="nomeComercio"
                  value={formValues.nomeComercio}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do comércio"
                  required
                />
              </div>

              <div className="w-1/3">
                <Label htmlFor="nomeComercio">CNPJ</Label>
                <Input
                  id="nomeComercio"
                  name="nomeComercio"
                  value={formValues.nomeComercio}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do comércio"
                  required
                />
              </div>

              <div className="w-1/3">
                <Label htmlFor="nomeComercio">Responsável</Label>
                <Input
                  id="nomeComercio"
                  name="nomeComercio"
                  value={formValues.nomeComercio}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do comércio"
                  required
                />
              </div>

              <div className="w-1/3">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder="Digite o e-mail"
                  required
                />
              </div>

              <div className="w-1/2">
                <Label htmlFor="bio">Bio do Comércio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formValues.bio}
                  onChange={handleInputChange}
                  placeholder="Escreva uma breve descrição do seu comércio"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleSubmit}>
            Salvar dados
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Configuracoes    
