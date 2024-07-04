import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CadastroProspcts = () => {
  const [formData, setFormData] = useState({
    nome: '',
    proprietário: '',
    responsavel: '',
    contato: '',
    cidade: '',
    bairro: '',
    cep: '',
    rua: '',
    segmento: '',
    representante_ba: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
    if (!formData.proprietário) newErrors.proprietário = 'Proprietário é obrigatório';
    if (!formData.responsavel) newErrors.responsavel = 'Responsável é obrigatório';
    if (!formData.contato) newErrors.contato = 'Contato é obrigatório';
    // if (!/^\d{10,11}$/.test(formData.contato)) newErrors.contato = 'Contato deve ter 10-11 dígitos';
    if (!formData.cidade) newErrors.cidade = 'Cidade é obrigatória';
    if (!formData.bairro) newErrors.bairro = 'Bairro é obrigatório';
    if (!formData.cep) newErrors.cep = 'CEP é obrigatório';
    if (!/^\d{5}-\d{3}$/.test(formData.cep)) newErrors.cep = 'CEP deve estar no formato 12345-678';
    if (!formData.rua) newErrors.rua = 'Rua é obrigatória';
    if (!formData.segmento) newErrors.segmento = 'Segmento é obrigatório';
    if (!formData.representante_ba) newErrors.representante_ba = 'Representante BA é obrigatório';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submeter formulário
      console.log('Formulário enviado com sucesso!', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">Cadastro de Vendedores</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nome</span>
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`input input-bordered ${errors.nome ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Proprietário</span>
              </label>
              <input
                type="text"
                name="proprietário"
                value={formData.proprietário}
                onChange={handleChange}
                className={`input input-bordered ${errors.proprietário ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.proprietário && <p className="text-red-500 text-sm mt-1">{errors.proprietário}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Responsável</span>
              </label>
              <input
                type="text"
                name="responsavel"
                value={formData.responsavel}
                onChange={handleChange}
                className={`input input-bordered ${errors.responsavel ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.responsavel && <p className="text-red-500 text-sm mt-1">{errors.responsavel}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contato</span>
              </label>
              <input
                type="text"
                name="contato"
                value={formData.contato}
                onChange={handleChange}
                className={`input input-bordered ${errors.contato ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.contato && <p className="text-red-500 text-sm mt-1">{errors.contato}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Cidade</span>
              </label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                className={`input input-bordered ${errors.cidade ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bairro</span>
              </label>
              <input
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                className={`input input-bordered ${errors.bairro ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.bairro && <p className="text-red-500 text-sm mt-1">{errors.bairro}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">CEP</span>
              </label>
              <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                className={`input input-bordered ${errors.cep ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.cep && <p className="text-red-500 text-sm mt-1">{errors.cep}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rua</span>
              </label>
              <input
                type="text"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                className={`input input-bordered ${errors.rua ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.rua && <p className="text-red-500 text-sm mt-1">{errors.rua}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Segmento</span>
              </label>
              <input
                type="text"
                name="segmento"
                value={formData.segmento}
                onChange={handleChange}
                className={`input input-bordered ${errors.segmento ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.segmento && <p className="text-red-500 text-sm mt-1">{errors.segmento}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Representante BA</span>
              </label>
              <input
                type="text"
                name="representante_ba"
                value={formData.representante_ba}
                onChange={handleChange}
                className={`input input-bordered ${errors.representante_ba ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.representante_ba && <p className="text-red-500 text-sm mt-1">{errors.representante_ba}</p>}
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroProspcts;



