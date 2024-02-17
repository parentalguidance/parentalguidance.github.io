<template>
  <div class="form-wrapper">
    <Panel header="השאירו פרטים ואחזור אליכם בהקדם">
      <div class="form">
        <div class="flex flex-column gap-3">
          <FloatLabel style="display: inline-flex">
            <InputText id="name" v-model="name" :invalid="nameInvalid" @input="checkName"/>
            <label for="name">שם</label>
          </FloatLabel>
        </div>
        <br>
        <br>
        <div class="flex flex-column gap-3">
          <FloatLabel style="display: inline-flex" >
            <InputText id="phone" v-model="phone" :invalid="phoneInvalid" @input="checkPhone" />
            <label for="phone">טלפון</label>
          </FloatLabel>
        </div>
        <br>
        <br>
        <div class="flex flex-column gap-3">
          <FloatLabel style="display: inline-flex">
            <InputText id="email" v-model="email" :invalid="emailInvalid" @input="checkEmail"/>
            <label for="email">כתובת מייל (לא חובה אך כדאי..)</label>
          </FloatLabel>
        </div>
        <br>
        <label>נושא הפניה</label>
        <br><br>
        <div class="flex align-items-center">
          <RadioButton v-model="reason" inputId="parental" name="parental" value="parental" />
          <label for="parental" class="ml-2 radio-label">הדרכת הורים</label>
        </div>
        <br>
        <div class="flex align-items-center">
          <RadioButton v-model="reason" inputId="sleep" name="sleep" value="sleep" />
          <label for="sleep" class="ml-2 radio-label">ייעוץ שינה</label>
        </div>
      </div>
      <Button label="שליחה" @click="onSubmit" :disabled="preventSubmit"/>
    </Panel>
  </div>
  <Dialog v-model:visible="dialogVisible" modal header="" :style="{ width: '17rem', direction: 'rtl' }">
    <span class="p-text-secondary block mb-5">תודה רבה! אצור קשר בקרוב</span>
  </Dialog>
</template>

<script>

import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Panel from 'primevue/panel';
import Button from "primevue/button";
import Dialog from 'primevue/dialog';

const TOKEN = "qd0XR-4f0Dx8MLDe2GhcJVFQyNQ8dMam8XL5unp_OUE";
const WH_URL = "https://hooks.torq.io/v1/webhooks/96a2cbe7-bad5-4247-ade1-8e68e87b8ee9";

export default {
  name: "InfoForm",
  components: {
    FloatLabel,
    InputText,
    RadioButton,
    Panel,
    Button,
    Dialog,
  },
  data() {
    return {
      name: "",
      nameInvalid: false,
      phone: "",
      phoneInvalid: false,
      email: "",
      emailInvalid: false,
      reason: "",
      submitted: false,
      dialogVisible: true,
    }
  },
  computed: {
    preventSubmit() {
      return this.submitted ||
          this.nameInvalid || (this.phoneInvalid || this.emailInvalid) ||
          this.name === "" ||
          (this.phone === "" && this.email === "");
    }
  },
  methods: {
    checkName() {
      this.nameInvalid = this.name === "";
    },
    checkPhone() {
      this.phoneInvalid = this.phone !== "" && !this.phone.match(/\+?[0-9]{3}?-?[0-9]{7,10}/)
    },
    checkEmail() {
      this.emailInvalid = this.email !== "" && !this.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    },
    clearForm() {
      this.email = ""
      this.phone = ""
      this.reason = ""
      this.name = ""
      this.emailInvalid = false;
      this.nameInvalid = false;
      this.phoneInvalid = false;
    },
    onSubmit() {
      if (this.nameInvalid || (this.phoneInvalid && this.emailInvalid)) {
        return
      }
      const requestOptions = {
        method: "POST",
        mode: 'no-cors',
        headers: { "content-type": "application/json", "x-token": TOKEN },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          reason: this.reason,
        })
      };
      fetch(WH_URL, requestOptions).catch((reason) => {console.log(reason)}).then(() => {
        this.clearForm();
        this.dialogVisible = true;
      });

      console.log({
        name: this.name,
        email: this.email,
        phone: this.phone,
        reason: this.reason,
      });
      this.submitted = true;
    }
  }

}
</script>

<style scoped>

.form-wrapper {
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 22%;
  justify-content: center;
}

.form {
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 10px;
  display: block;
  text-align: right;

}

.p-float-label .p-inputtext{
  width: 20rem;
}

.p-float-label > label{
  right: 0.75rem;
}

.radio-label {
  margin-right: 8px;
}

.p-panel {
  background-color: #ddb2b2;
  color: #114b5f;
  border-color: #114b5f;
  border-width: 2px;
}

button {
  background-color: #114b5f;
}
</style>