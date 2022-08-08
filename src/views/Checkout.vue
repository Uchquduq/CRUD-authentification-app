<template>
  <v-card class="mt-8 mb-8" elevation="0">
    <v-row align="center" justify="space-around">
      <v-col cols="12" sm="7" lg="5">
        <v-card-title primary-title>
          Checkout Form
        </v-card-title>
        <v-form ref="billing" class="mt-2 ml-4 mb-5 mr-4">
          <v-row>
            <v-col class="py-0">
              <v-text-field
                v-model="firstName"
                dense
                name="firstName"
                label="First Name"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col class="py-0">
              <v-text-field
                v-model="lastName"
                dense
                name="lastName"
                label="Last Name"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-0">
              <v-text-field
                v-model="phone"
                dense
                name="phone"
                label="Phone #"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col class="py-0">
              <v-text-field
                v-model="email"
                dense
                label="Email"
                name="email"
                outlined
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-0">
              <v-text-field
                v-model="address"
                dense
                label="Street Address"
                name="address"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col class="py-0">
              <v-text-field
                v-model="city"
                dense
                label="City"
                name="city"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-0"
              ><v-text-field
                v-model="country"
                dense
                label="Country"
                name="country"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col class="py-0">
              <v-text-field
                v-model="region"
                dense
                label="Region"
                name="region"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col class="py-0">
              <v-text-field
                v-model="postalCode"
                dense
                label="Postal Code"
                name="postalCode"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <p class="title ml-3 mb-4">Payment Details</p>
          <v-text-field
            v-model="cardNumber"
            label="Card #"
            outlined
            :rules="[rules.required]"
          ></v-text-field>
          <v-row>
            <v-col class="py-0">
              <v-text-field
                v-model="expiryDate"
                label="Date"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col class="py-0">
              <v-text-field
                v-model="cvc"
                label="cvc"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col class="py-0">
              <v-text-field
                v-model="cardZip"
                label="Zip"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn elevation="0" @click.native="submitOrder">Submit</v-btn>
        </v-form>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card max-width="400" class="ml-5 mb-5 mr-4">
          <v-card-title>Order Summary</v-card-title>
          <v-container class="pa-5">
            <v-row justify="space-between">
              <v-card-subtitle class="title py-1 pl-3">Product</v-card-subtitle>
              <v-card-subtitle class="title py-1 pr-3"
                >Subtotal</v-card-subtitle
              >
            </v-row>
            <v-row v-for="item in cartItem" :key="item.id" justify="space-between">
              <v-img
                class="ml-4 p-0"
                :src="item.img"
                height="50px"
                contain
                max-width="50px"
              ></v-img>
              <v-card-subtitle>
                {{ item.title }} x {{ item.quantity }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ item.price }}
              </v-card-subtitle>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="space-between">
              <v-card-subtitle>Total Price</v-card-subtitle>
              <template>
                <v-card-subtitle v-if="totalPrice">
                  $ {{ totalPrice }}
                </v-card-subtitle>
                <v-card-subtitle v-else>$0.00</v-card-subtitle>
              </template>
            </v-row>
            <v-row justify="space-between" v-if="totalPrice">
              <v-card-subtitle>Shipping</v-card-subtitle>
              <v-card-subtitle>$ {{ shippingCost }}</v-card-subtitle>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="space-between" v-if="totalPrice">
              <v-card-subtitle>Subtotal</v-card-subtitle>
              <v-card-subtitle>$ {{ total }}</v-card-subtitle>
            </v-row>
            <v-row justify="center">
              <v-btn elevation="0" class="my-2" to="/cart">Edit Cart</v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Checkout",

  data: () => ({
    shippingCost: 10,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    region: "",
    postalCode: "",
    cardNumber: "4242 4242 4242 4242",
    expiryDate: "01/2023",
    cvc: "123",
    cardZip: "94103",
    rules: {
      email: (v) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || "Invalid e-mail.";
      },
      required: (v) => !!v || "Required.",
    },
  }),
  computed: {
    ...mapGetters(["totalPrice"]),
    total() {
      return this.totalPrice + this.shippingCost;
    },
    cartItem() {
      return this.$store.state.cartItems;
    },
  },

  methods: {
    submitOrder() {
      if (!this.$refs.billing.validate()) return; // eslint-disable-line no-useless-return

      const lineItems = {};

      for (const i of this.cart.line_items) {
        lineItems[i.id] = {
          quantity: i.quantity,
        };
      }
      // Capture checkout data

      // make request
    },
  },
};
</script>
