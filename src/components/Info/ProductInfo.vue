<template>
  <div class="mt-6">
    <v-app>
      <v-container grid-list-md text-xs-center>
        <v-layout row>
          <v-flex sm12 md5 xs12 class="mb-5">
            <v-card elevation="0">
              <v-img :src="info.img" max-height="400" contain class=""></v-img>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md7 pl-5 class="d-flex text-xs-left">
            <div class="product-summary">
              <h2 class="product-title">{{ info.title }}</h2>
              <v-card-text class="p-0 py-3">
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="info.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="15"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    5.0 <span></span> Customer reviews (413)
                  </div>
                </v-row>
              </v-card-text>
              <div class="price mt-2">
                <h3>
                  <span>$</span>
                  {{ info.price }}
                </h3>
                <del>$ {{ info.price * 1.5 }}</del>
              </div>
              <div class="prodect-details">
                <h3>Product Details</h3>
                <p>
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem,
                </p>
              </div>
              <div class="mt-2">
                
                <v-container class="px-0" fluid>
                  <v-row>
                    <v-col>
                       <span class="mb-1">Select Colour :</span>
                      <div class="mt-1">
                       
                        <input
                          type="radio"
                          name="color"
                          id="red"
                          v-model="colorRadio"
                          value="red"
                        />
                        <label for="red"><span class="red"></span></label>

                        <input
                          type="radio"
                          name="color"
                          v-model="colorRadio"
                          id="green"
                          value="green"
                        />
                        <label for="green"><span class="green"></span></label>

                        <input
                          type="radio"
                          name="color"
                          v-model="colorRadio"
                          id="yellow"
                          value="yellow"
                        />
                        <label for="yellow"><span class="yellow"></span></label>

                        <input
                          type="radio"
                          name="color"
                          v-model="colorRadio"
                          id="olive"
                          value="olivie"
                        />
                        <label for="olive"><span class="olive"></span></label>

                        <input
                          type="radio"
                          name="color"
                          v-model="colorRadio"
                          id="orange"
                          value="orange"
                        />
                        <label for="orange"><span class="orange"></span></label>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <div v-if="info.type == 'smartphone' || info.type == 'smartwatch'">
                <span class="sub-heading">Select Size :</span>
                <v-row>
                  <v-col>
                    <div>
                      <input
                        class=""
                        type="radio"
                        name="size"
                        id="32"
                        v-model="size"
                        value="32"
                      />
                      <label for="32" class="mr-10"
                        ><span class="ml-1 32">32GB</span></label
                      >

                      <input
                        type="radio"
                        name="size"
                        v-model="size"
                        id="64"
                        value="64"
                      />
                      <label for="64"><span class="32">64GB</span></label>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <div class="buy-product">
               
                <div class="product-qty">
                  <table>
                    <tr><td> <span class="mr-2">Quantity: </span> </td>
                      <td>
                        <button
                          @click="minus"
                          class="reduced items-count"
                          type="button"
                        >
                          <v-icon>mdi-minus</v-icon>
                        </button>
                        <input
                          v-model.number="quantity"
                          type="text"
                          class="input-text qty"
                          value="1"
                          maxlength="12"
                        />
                        <button
                          @click="plus"
                          class="increase items-count"
                          type="button"
                        >
                          <v-icon>mdi-plus</v-icon>
                        </button>
                      </td>
                    </tr>
                  </table>

                  <div class="cart-btn pb-2">
                    <v-hover v-slot="{ hover }" open-delay="50">
                      <v-btn
                        class="m-1"
                        :elevation="hover ? 5 : 0"
                        :class="{ 'on-hover': hover }"
                        
                        @click="buy"
                      >
                        <v-icon>mdi-check</v-icon>BUY NOW</v-btn
                      ></v-hover
                    ><v-hover v-slot="{ hover }" open-delay="50">
                      <v-btn
                        class="m-1"
                        :elevation="hover ? 5 : 0"
                        :class="{ 'on-hover': hover }"
                        @click="addtoCart"
                      >
                        <v-icon>mdi-cart-plus</v-icon>ADD TO CART</v-btn
                      ></v-hover
                    >
                  </div>
                </div>
              </div>
            </div>
          </v-flex>

          <v-flex xs12>
            <div class="overview">
              <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
              >
                <v-tab v-for="item in overview" :key="item.menu">
                  {{ item.menu }}
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in overview" :key="item.menu">
                  <v-card color="basil" flat>
                    <v-card-text>{{ item.details }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  data: () => ({
    row: null,
    quantity: 1,
    size: null,
    tab: null,
    colorRadio: null,
    menus: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    defaultImg:
      "https://cdn.shopify.com/s/files/1/0054/3214/8081/products/45_665ca830-d1f2-48bd-8c84-02375dc2d883_large.jpg?v=1544128468",
    items: [
      {
        images:
          "https://cdn.shopify.com/s/files/1/0054/3214/8081/products/45_665ca830-d1f2-48bd-8c84-02375dc2d883_large.jpg?v=1544128468",
        isActive: true,
      },
      {
        images:
          "https://cdn.shopify.com/s/files/1/0054/3214/8081/products/47_large.jpg?v=1544128468",
      },
      {
        images:
          "https://cdn.shopify.com/s/files/1/0054/3214/8081/products/35_8364d9f9-d670-418a-acad-ce4832921345_large.jpg?v=1544128468",
      },
      {
        images:
          "https://cdn.shopify.com/s/files/1/0054/3214/8081/products/30_c7961d18-9fcb-4148-bfae-ff3063a99a82_large.jpg?v=1544128468",
      },
    ],
    overview: [
      {
        menu: "DESCRIPTION",
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        menu: "REVIEWS",
        details:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
      },
      {
        menu: "TAG",
        details:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      },
      {
        menu: "CUSTOM TAB",
        details:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    ],
  }),
  computed: {
    info() {
      return this.$store.state.infoProduct;
    },
  },
  methods: {
    buy() {
      var data = {
        title: this.info.title,
        price: this.info.price,
        color: this.info.color,
        id: this.info.id,
        img: this.info.img,
        type: this.info.type,
        rating: this.info.rating,
        quantity: this.quantity
      };
      console.log('buy')
      this.$store.commit("BUY", data);
      this.$router.push({ name: "Checkout" })
    },
    addtoCart() {
      this.$store.commit("IN_CART", this.info);
    },
    plus() {
      this.quantity++;
      return this.quantity;
    },
    minus() {
      if (this.quantity > 1) {
        return this.quantity--;
      }
      return this.quantity;
    },
  },
};
</script>

<style scoped>
/* Vuetify Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}

/* Radio */

input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label span {
  transform: scale(1.25);
}
input[type="radio"]:checked + label .red {
  border: 2px solid #505a0b;
}
input[type="radio"]:checked + label .orange {
  border: 2px solid #505a0b;
}
input[type="radio"]:checked + label .yellow {
  border: 2px solid #505a0b;
}
input[type="radio"]:checked + label .olive {
  border: 2px solid #505a0b;
}
input[type="radio"]:checked + label .green {
  border: 2px solid #505a0b;
}

label {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;
}
label:hover span {
  transform: scale(1.25);
}
label span {
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;
}
label span.red {
  background: #ee4646;
}
label span.orange {
  background: #f9f4f0;
}
label span.yellow {
  background: #55bee0;
}
label span.olive {
  background: #969696;
}
label span.green {
  background: #000000;
}

/* Product qty btn */

.product-qty {
  display: inline-block;
  margin-top: 20px;
  width: 100%;
}

.product-qty button.items-count {
  background-color: #fff;
  border: 1px #ddd solid;
  border-radius: 2px;
}

.product-qty button.items-count {
  font-size: 18px;
  line-height: 12px;
  height: 40px;
  width: 40px;
  color: #000;
}

.product-qty .qty {
  height: 40px;
  text-align: center;
  width: 70px;
  vertical-align: top;
  color: #000;
}

.qty {
  background-color: #ffffff;
  border: 1px #ced4da solid;
  border-radius: 2px;
  color: #666;
  font-size: 15px;
  font-weight: bold;
  margin: 0 5px;
}

.sub-title {
  color: #000;
  font-weight: 700;
  padding-right: 38px;
}

.cart-btn {
  margin: 15px 0px;
  border-bottom: 1px #e5e5e5 solid;
}

.cart-btn i {
  padding: 0px 10px;
}
</style>
