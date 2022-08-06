<template>
  <div id="app" class="body">
    <v-app id="inspire">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs5>
            <v-card elevation="0">
              <v-img
                :src="defaultImg"
                max-height="400"
                contain
                class="grey darken-4 product-img"
              ></v-img>
            </v-card>
            <v-layout row wrap>
              <v-flex v-for="(item, index) in items" :key="index" xs3>
                <v-card class="product-img">
                  <v-img
                    class="sub-img"
                    v-bind:class="{ activeimg: items.isActive }"
                    :src="item.images"
                    @click="defaultImg = item.images"
                  ></v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs7 pl-5 class="d-flex text-xs-left">
            <div class="product-summary">
              <h2 class="product-title">Basic contrast sneakers</h2>
              <v-card-text class="p-0 py-3">
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="5"
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
                  160.00
                </h3>
                <del>$ 180</del>
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
                <p>Select Colour :</p><v-container
    class="px-0"
    fluid
  >
                <v-row>
                  <v-col>
                    <v-radio-group v-model="row" row>
                      <v-radio
                        color="red"
                        label="red"
                        value="red"
                        row
                      ></v-radio>
                      <v-radio
                        color="primary"
                        label="primary"
                        value="primary"
                      ></v-radio
                      ><v-radio
                        color="success"
                        label="green"
                        value="success"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                </v-container>
              </div>
              <div>
                <p class="sub-heading">Select Size :</p>
                <v-row>
                  <v-col>
                    <v-radio-group v-model="row" row>
                      <v-radio color="M" label="M" value="M" row></v-radio>
                      <v-radio color="L" label="L" value="L"></v-radio
                      ><v-radio color="XL" label="XL" value="XL"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </div>

              <div class="buy-product">
                <div class="product-qty">
                  <table>
                    <tr>
                      <td><label class="sub-title">Quantity :</label></td>
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
                      >
                        <v-icon>mdi-check</v-icon>BUY NOW</v-btn
                      ></v-hover
                    ><v-hover v-slot="{ hover }" open-delay="50">
                      <v-btn
                        class="m-1"
                        :elevation="hover ? 5 : 0"
                        :class="{ 'on-hover': hover }"
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
    quantity: 1,
    tab: null,
    row: null,
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
  methods: {
    plus() {
      this.quantity++;
      return this.quantity;
    },
    minus() {
      if (this.quantity > 0) {
        return this.quantity--;
      }
      return this.quantity;
    },
  },
};
</script>

<style scoped>
.body {
  padding: 35px 0px;
}
* {
  box-sizing: border-box;
}
.product-img {
  cursor: pointer;
  margin-top: 10px;
}

.product-title {
  text-transform: uppercase;
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 1.2em;
}
.user-ratings {
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 5px;
  display: inline-block;
}

.star-rating {
  display: inline-block;
  font-size: 18px;
  position: relative;
  height: 18px;
  line-height: 18px;
  letter-spacing: 2px;
  width: 130px;
}

.star-rating:before {
  content: "\f005\f005\f005\f005\f123";
  position: absolute;
  top: 0;
  left: 0;
  color: #fc0;
  box-sizing: border-box;
}

.star-rating span {
  overflow: hidden;
  float: left;
  top: 0;
  left: 0;
  height: 18px;
  position: absolute;
  font-size: 0;
}
.user-ratings .total-review {
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  float: right;
  font-size: 14px;
  text-decoration: none;
}
.total-review:hover {
  text-decoration: underline;
}

.price {
  display: block;
  margin-bottom: 10px;
}
.price h3 {
  display: inline-block;
  font-size: 28px;
  color: #e91e63;
}
.price del {
  padding: 0px 20px;
  font-size: 20px;
  color: #9e9e9e;
}
.prodect-details {
  padding-top: 15px;
  padding-bottom: 20px;
  font-family: "Lora", serif;
  border-bottom: 1px dashed #ddd;
}

.colors {
  margin: 0px;
  padding: 0px;
  display: inline-block;
  margin-top: 20px;
  list-style: none;
}
.colors p {
  float: left;
  margin-top: 10px;
  color: #000;
  font-weight: 700;
  padding-right: 20px;
}
.color-box {
  height: 35px;
  width: 35px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
  opacity: 0.8;
}

.active-col {
  outline: 1px dashed black;
}

.size {
  margin: 0px;
  padding: 0px;
  display: inline-block;
  margin-top: 20px;
  list-style: none;
}
.size p {
  float: left;
  margin-top: 10px;
  color: #000;
  font-weight: 700;
  padding-right: 38px;
}

.size-box {
  padding: 12px;
  margin: 0px 5px;
  display: inline-block;
  cursor: pointer;
  color: #000;
  font-weight: 400;
}
.active-siz {
  background-color: #b2dfdb;
}
.buy-product {
  margin-top: 15px;
  padding: 15px 0px;
  border-top: 1px dashed #ddd;
}

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
  margin: 0 -5px;
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

.socal-link {
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
  list-style: none;
  display: block;
}
.socal-link li {
  list-style: none;
  display: inline-block;
  margin: 0px 8px;
}

.socal-link li a {
  border: 1px #ddd solid;
  color: #666;
  font-size: 15px;
  line-height: 36px;
  padding: 8px 12px;
}

.socal-link li a:hover {
  background: #ff5252;
  color: #fff;
}

.activeimg {
  border: 1px solid #000;
}

.overview {
  margin-top: 30px;
}

/* Vuetify Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
