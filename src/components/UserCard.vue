// Single user card with short inaformation

<template>
  <div class="col-lg-4 col-md-6 col-xs-10">
    <div class="card">
      <div class="card-body mx-4">
        <h4 class="card-title" :title="user.name">
          {{ user.username }}
        </h4>
        <h6 class="card-subtitle mb-2 text-muted">{{ shortName }}</h6>
        <div class="card-text">
          <div>Email: {{ user.email }}</div>
        </div>
      </div>
      <div class="btn-wrapper m-4">
        <router-link class="btn btn-primary" :to="userLink"
          >More details</router-link
        >
        <div class="btn btn-warning" @click="delUser(user.id)">Delete User</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    user: Object,
  },

  computed: {
    userLink() {
      return `/users/${this.user.id}`;
    },
    shortName() {
      let fullName = this.user.name.split(" ");
      return `${fullName[0][0]}. ${fullName[1]}`;
    },
    siteAddress() {
      return `http://${this.user.website}`;
    },
  },

  methods: {
    ...mapActions(["fetchById", "delUser"]),
  },
};
</script>

<style scoped>
.card {
  padding: 10px;

  display: flex;

  color: #d0d326;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  background-color: #333b66;

  border: 1px solid gray;
  border-radius: 10px;
}

.btn-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
