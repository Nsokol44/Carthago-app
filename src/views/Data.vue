<template>


      <div>

        <!-- Title -->
        <h1 class="text-center"  style="padding-top:50px">Data Repository</h1>
        <h4 class="text-center" style="padding-bottom: 50px">Find any Data You need here</h4>

        <!-- Content -->
        <v-container

            fluid
            class="spacing-playground pa-6"
        >
          <!--  Search Bar  -->
          <v-text-field
              placeholder="Search"
              filled
              dense
              v-model="search"
          ></v-text-field>

          <!--  Results from Search/Filter -->
          <v-data-table
              v-if="search"
              :headers="headers"
              :items="data"
              item-key="name"
              class="elevation-1"
              :search="search"
              :custom-filter="filterSearch">
          </v-data-table>
        </v-container>
      </div>

</template>



<script>
export default {
  data () {
    return {
      search: '',

      data: [
        {
          Title: 'My Blockchain Data',
          Description: "This is a description on my first Blockchain data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Web3 Data',
          Description: "This is a description on my first Web3 data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My NFT Data',
          Description: "This is a description on my first NFT data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Crypto Data',
          Description: "This is a description on my first Crypto data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Blockchain Data',
          Description: "This is a description on my first Blockchain data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Web3 Data',
          Description: "This is a description on my first Web3 data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My NFT Data',
          Description: "This is a description on my first NFT data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Crypto Data',
          Description: "This is a description on my first Crypto data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Blockchain Data',
          Description: "This is a description on my first Blockchain data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Web3 Data',
          Description: "This is a description on my first Web3 data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My NFT3 Data',
          Description: "This is a description on my first NFT data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Crypto Data',
          Description: "This is a description on my first Crypto data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Blockchain Data',
          Description: "This is a description on my first Blockchain data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Web3 Data',
          Description: "This is a description on my first Web3 data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My NFT Data',
          Description: "This is a description on my first NFT data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Crypto Data',
          Description: "This is a description on my first Crypto data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Blockchain Data',
          Description: "This is a description on my first Blockchain data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Web3 Data',
          Description: "This is a description on my first Web3 data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My NFT Data',
          Description: "This is a description on my first NFT data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Crypto Data',
          Description: "This is a description on my first Crypto data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Blockchain Data',
          Description: "This is a description on my first Blockchain data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Web3 Data',
          Description: "This is a description on my first Web3 data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My NFT Data',
          Description: "This is a description on my first NFT data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Crypto Data',
          Description: "This is a description on my first Crypto data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Blockchain Data',
          Description: "This is a description on my first Blockchain data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Web3 Data',
          Description: "This is a description on my first Web3 data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My NFT Data',
          Description: "This is a description on my first NFT data in the repository",
          url: "http://localhost:8080/data",
        },
        {
          Title: 'My Crypto Data',
          Description: "This is a description on my first Crypto data in the repository",
          url: "http://localhost:8080/data",
        },
      ],
    }
  },

  computed: {
    headers () {
      return [
        {
          text: 'Title',
          align: 'start',
          value: 'Title',
          sortable: false,
        },
        {
          text: 'Description',
          value: 'Description',
          sortable: false,
        },
      ]
    },
  },

  methods: {
    filterSearch (value, search) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    },
  },
}
</script>

<style lang="scss">
</style>
