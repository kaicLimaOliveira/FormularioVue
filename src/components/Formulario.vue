<template>
  <div class="container">
    <div class="row">
      <div class="col-6 bg-light">
        <span class="fs-4">ENTRADA DE DADOS</span>
        <hr />
        <form @submit.prevent="send($event)">
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Nome:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model.trim="form.name"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input
                type="email"
                class="form-control"
                v-model.trim="form.email"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Senha:</label>
            <div class="col">
              <input
                type="password"
                class="form-control"
                v-model="form.password"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Idade:</label>
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model.number="form.age"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gênero:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Feminino"
                  v-model="form.genre"
                />
                <label class="form-check-label"> Feminino </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Masculino"
                  v-model="form.genre"
                />
                <label class="form-check-label"> Masculino </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Licença:</label>
            <div class="col">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  v-model="form.licence"
                  type="checkbox"
                  true-value="Sim"
                  false-value="Não"
                />
                <label class="form-check-label">Li e aceito os termos</label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Interesses:</label>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="JavaScript"
                  v-model="form.interests"
                />
                <label class="form-check-label"> JavaScriot </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="VueJs"
                  v-model="form.interests"
                />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="ReactJs"
                  v-model="form.interests"
                />
                <label class="form-check-label"> ReactJs </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="NodeJs"
                  v-model="form.interests"
                />
                <label class="form-check-label"> NodeJS </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Telefone:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.telephone"
                v-maska="'(##) #####-####'"
              />
              <small class="text-muted">Formato: 11 97777-5555</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CEP:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cep"
                v-maska="'#####-###'"
              />
              <small class="text-muted">Formato: 00000-000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CPF:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cpf"
                v-maska="'###.###.###-##'"
              />
              <small class="text-muted">Formato: 000.000.000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CNPJ:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cnpj"
                v-maska="'##.###.###/####-##'"
              />
              <small class="text-muted">Formato: 00.000.000/0000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cartão de Crédito:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.creditCard"
                v-maska="'#### #### #### ####'"
              />
              <small class="text-muted">Formato: 0000 0000 0000 0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Placa do veículo:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.vehiclePlate"
                v-maska="'AAA-####'"
              />
              <small class="text-muted">Formato: AAA-0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label"
              >Placa do veículo MercoSul:
            </label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.vehiclePlateMercoSul"
                v-maska="'AAA#A##'"
              />
              <small class="text-muted">Formato: AAA0A00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">RG:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.rg"
                v-maska="'#*-X'"
              />
              <small class="text-muted">Formato: Sem padrão</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data:</label>
            <div class="col">
              <input type="date" class="form-control" v-model="form.date" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data/hora local:</label>
            <div class="col">
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.datetimeNow"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Mês:</label>
            <div class="col">
              <input type="month" class="form-control" v-model="form.month" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Semana:</label>
            <div class="col">
              <input type="week" class="form-control" v-model="form.week" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hora:</label>
            <div class="col">
              <input type="time" class="form-control" v-model="form.hour" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cor:</label>
            <div class="col">
              <input type="color" class="form-color" v-model="form.color" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Valor limite:</label>
            <div class="col">
              <input
                type="range"
                class="form-range"
                min="0"
                max="100"
                step="1"
                v-model="form.range"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Escondido:</label>
            <div class="col">
              <input type="hidden" class="form-control" v-model="form.hidden" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input
                type="file"
                class="form-control"
                multiple
                @change="selectFile($event)"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Descrição:</label>
            <div class="col">
              <textarea
                type="text"
                class="form-control"
                rows="3"
                multiple
                v-model="form.description"
              ></textarea>
            </div>
          </div>
          <div class="mb-3 m-1 row">
            <span>Cursos: </span>
            <select class="form-select" v-model="form.curso">
              <option value="" disabled></option>
              <option v-for="curso in cursos" :key="curso.id">
                {{ curso.id }} - {{ curso.curso }}
              </option>
            </select>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Avaliação: </label>
            <div class="col">
              <!-- <InputEstrelas
                :numberStar="5"
                @avaliar="form.evaluation = $event"
              /> -->

              <InputEstrelas
                :numberStar="5"
                v-model:avaliar="form.evaluation"
              />
            </div>
          </div>
          <hr />

          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button
                class="btn btn-secondary"
                type="reset"
                @click="resetForm()"
              >
                Limpar
              </button>
              <button class="btn btn-success" type="button">
                Enviar (btn)
              </button>
              <button class="btn btn-success" type="submit">
                Enviar (submit)
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        class="col-6 text-white bg-secondary"
        :style="'background-color:' + form.color + '!important'"
      >
        <hr />
        <div class="mb-5 row">
          <span class="fs-4">ESTADO DO OBJETO </span> <br />
          <!-- Template -->
          <span>
            Meu nome é {{ form.name }} e tenho {{ form.age }} anos, <br />
            tenho interesse pelas seguintes tecnologias:
            <div v-for="interesse in form.interests" :key="interesse.id">
              {{ interesse }}
            </div>
          </span>
        </div>

        <span class="fs-4">SAÍDA DE DADOS</span>
        <hr />
        <div class="mb-3 row">
          <span>Nome: {{ form.name }}</span>
        </div>
        <div class="mb-3 row">
          <span>E-mail: {{ form.email }}</span>
        </div>
        <div class="mb-3 row">
          <span>Senha: {{ form.password }}</span>
        </div>
        <div class="mb-3 row">
          <span>Idade: {{ form.age }}</span>
        </div>
        <div class="mb-3 row">
          <span>Gênero: {{ form.genre }}</span>
        </div>
        <div class="mb-3 row">
          <span>Licença: {{ form.licence }}</span>
        </div>
        <div class="mb-3 row">
          <span>
            Interesses:
            <ul>
              <li v-for="(interesse, index) in form.interests" :key="index">
                {{ interesse }}
              </li>
            </ul>
          </span>
        </div>
        <div class="mb-3 row">
          <span>CEP: {{ form.cep }}</span>
        </div>
        <div class="mb-3 row">
          <span>CPF: {{ form.cpf }}</span>
        </div>
        <div class="mb-3 row">
          <span>CNPJ: {{ form.cnpj }}</span>
        </div>
        <div class="mb-3 row">
          <span>Cartão de crédito: {{ form.creditCard }}</span>
        </div>
        <div class="mb-3 row">
          <span>Placa do veículo: {{ form.vehiclePlate }}</span>
        </div>
        <div class="mb-3 row">
          <span
            >Placa do veículo MercoSul: {{ form.vehiclePlateMercoSul }}
          </span>
        </div>
        <div class="mb-3 row">
          <span>RG: {{ form.rg }}</span>
        </div>
        <div class="mb-3 row">
          <span>Data: {{ $moment(form.date).format("DD/MM/yyyy") }}</span>
        </div>
        <div class="mb-3 row">
          <span>Data/hora local: {{ form.datetimeNow }}</span>
          <ul>
            <li>{{ $moment(form.datetimeNow).format("dddd") }}</li>
            <li>{{ $moment(form.datetimeNow).add(1, "days") }}</li>
            <li>{{ $moment(form.datetimeNow).add(2, "months") }}</li>
          </ul>
        </div>
        <div class="mb-3 row">
          <span>Mês: {{ form.month }}</span>
        </div>
        <div class="mb-3 row">
          <span>Semana: {{ form.week }}</span>
        </div>
        <div class="mb-3 row">
          <span>Hora: {{ form.hour }}</span>
        </div>
        <div class="mb-3 row">
          <span>Cor: {{ form.color }}</span>
        </div>
        <div class="mb-3 row">
          <span>Valor limite: {{ form.range }}</span>
        </div>
        <div class="mb-3 row">
          <span>Escondido: {{ form.hidden }}</span>
        </div>
        <div class="mb-3 row">
          <span>Upload:</span>
          <ul>
            <li v-for="(file, index) in form.files" :key="index">
              {{ file.name }}
            </li>
          </ul>
        </div>

        <div class="mb-3 row">
          <span>Descrição: </span>
          <!-- <pre>{{ form.description }}</pre> -->
          <div style="white-space: pre">
            {{ form.description }}
          </div>
        </div>

        <div class="mb-3 row">
          <span>Curso: {{ form.curso }}</span>
        </div>

        <div class="mb-3 row">
          <span>Avaliação: {{ form.evaluation }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputEstrelas from "@/components/InputEstrelas.vue";
export default {
  name: "Formulario",
  components: {
    InputEstrelas,
  },
  data: () => ({
    cursos: [
      { id: 1, curso: "Banco de dados relacionais" },
      { id: 2, curso: "Desenvolvimento Web Avançado com VueJs" },
      { id: 3, curso: "Desenvolvimento Web Avançado com ReactJs" },
      { id: 4, curso: "Curso completo de NodeJs" },
    ],
    form: {},
    formReset: {
      name: "",
      email: "",
      password: "",
      age: "",
      licence: "Não",
      interests: [],
      genre: "",
      telephone: "",
      cep: "",
      cpf: "",
      cnpj: "",
      creditCard: "",
      vehiclePlate: "",
      vehiclePlateMercoSul: "",
      rg: "",
      date: "",
      datetimeNow: "",
      month: "",
      week: "",
      hour: "",
      color: "#6c757d",
      range: 5,
      hidden: "teste",
      files: {},
      description: "",
      curso: "",
      evaluation: 0,
    },
  }),
  methods: {
    selectFile(e) {
      console.log(e);
      this.form.files = e.target.files;
    },
    send() {
      const sendForm = Object.assign({}, this.form);
      console.log(sendForm);
    },
    resetForm() {
      this.form = Object.assign({}, this.formReset);
    },
  },

  created() {
    this.resetForm();
  },
};
</script>
