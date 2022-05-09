<template>
  <div class="blog-card">
    <v-card
    class="mx-2 my-2"
    max-width="350"
    outlined
  >
    <v-img
      class="black--text align-end"
      height="200px"
      :src="post.blogCoverPhoto"
    >
      
    </v-img>
    <v-card-title class="text-sm-center">{{ post.blogTitle }}</v-card-title>
    <v-card-subtitle class="pb-0">
      Posted On: {{ new Date(post.blogDate).toLocaleString('en-us', {dateStyle: "long"}) }}
    </v-card-subtitle>

    <!--<v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>-->

    <v-card-actions>
      <v-btn
        color="brown"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="brown"
        text
        :to="{name: 'ViewBlog', params: {blogid: this.post.blogID}}"
      >
        Explore
      </v-btn>

      <v-btn
      orange
      text
        v-show="editPost"
        @click="editBlog">
        <Edit  />
        Edit
        </v-btn>

        <v-btn
      orange
      text
        v-show="editPost"
        @click="deletePost">
        <Delete  />
        Delete
        </v-btn>

    </v-card-actions>
  </v-card>


  </div>

</template>

<script>
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";

export default {
  name: "blogCard",
  props: ["post"],
  components: {
    Edit,
    Delete,
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post.blogID);
    },
    editBlog() {
      this.$router.push({name: 'EditBlog', params: {blogid: this.post.blogID }});
    }
  },
  computed: {
      editPost() {
          return this.$store.state.editPost
      }
  }
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) 0 2px 4px -1px;
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: white;
      transition: 0.5s ease all;

      &:hover {
        background-color: #303030;

        .edit,
        .delete {
          path {
            fill: #fff;
          }
        }
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .edit,
      .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 10%;
    min-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300px;
    }
    h6 {
      font-size: 400;
      font-weight: 12px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

        .arrow {
            width: 10px;
        }

    }
  }
}
</style>