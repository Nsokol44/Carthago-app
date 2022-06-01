<template>
  <div class="blog-card-wrap">
    <h2 class="text-center"> Feel free to browse our full repository on Medium! </h2>

<v-card-actions class="justify-center my-2">
 <v-btn raised color="primary" href="https://www.medium.com/carthago"> Take Me There </v-btn>
</v-card-actions>



    <div class="blog-cards containter mx-3">
      <div class="toggle-edit" v-if="admin">
        <span>Toggle Editing</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <v-row
        :align="align"
        style="height: 150px;"
      >
      <BlogCard
        :post="post"
        v-for="(post, index) in blogPostsAll"
        :key="index"
      />
      </v-row>
    </div>

  </div>

</template>

<script>
import BlogCard from "../components/BlogCard";


export default {
  name: "Articles",
  components: { BlogCard },
  computed: {
    blogPostsAll() {
      return this.$store.getters.blogPostsAll;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
     admin() {
    return this.$store.state.profileAdmin;
  },
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: -4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.6);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: -4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.6);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
