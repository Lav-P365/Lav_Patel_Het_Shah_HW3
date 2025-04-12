const app = Vue.createApp({
  data() {
    return {
      teams: [],
      owner: null,
      loadingList: true,
      loadingOwner: false,
      errorList: '',
      errorOwner: '',
    };
  },

  created() {
    this.fetchTeams();
  },

  methods: {
    fetchTeams() {
      this.loadingList = true;
      fetch("http://localhost:8000/api/teams")
        .then(res => res.json())
        .then(data => {
          this.teams = data;
        })
        .catch(() => {
          this.errorList = "⚠️ Failed to fetch teams.";
        })
        .finally(() => {
          this.loadingList = false;
        });
    },

    getTeamDetails(ownerId) {
      this.loadingOwner = true;
      this.owner = null;
      this.errorOwner = "";

      fetch(`http://localhost:8000/api/owner/${ownerId}`)
        .then(res => res.json())
        .then(data => {
          this.owner = data;
        })
        .catch(() => {
          this.errorOwner = "⚠️ Failed to fetch owner info.";
        })
        .finally(() => {
          this.loadingOwner = false;
        });
    }
  }
});

app.mount("#app");
