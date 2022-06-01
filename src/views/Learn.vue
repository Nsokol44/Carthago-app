<template>


      <div>

        <!--  Title   -->
        <h1 class="text-center" style="padding:50px">Learning Modules</h1>

        <!-- Cards (Content) -->
          <div class="blog-cards ">
            <div class="toggle-edit" v-if="admin">
              <span>Toggle Editing</span>
            </div>

            <v-container>
            <v-row
                style="height: 150px;"

            >
              <BlogCard
                  :post="post"
                  v-for="(post, index) in blogPostsAll"
                  :key="index"
              />
            </v-row>
            </v-container>
          </div>




      </div>




</template>

<script>
import BlogCard from "../components/BlogCard";


export default {
  name: "Learn",

  components: { BlogCard },

  // Used the same components from Articles. Need to be switched to
  // Learning modules (eg. $store.getters.
  computed: {

    blogPostsAll() {
      return this.$store.getters.blogPostsAll;
    },

    admin() {
      return this.$store.state.profileAdmin;
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
