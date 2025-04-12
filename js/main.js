const app = Vue.createApp({
  data() {
    return {
      teams: [],
      teamDetails: null,
      owner: null,
      loadingList: true,
      loadingOwner: false,
      errorList: "",
      errorOwner: ""
    };
  },

  created() {
    this.fetchTeams();
  },

  methods: {
    fetchTeams() {
      fetch("http://localhost:8000/api/teams")
        .then(res => res.json())
        .then(data => {
          this.teams = data;
        })
        .catch(() => {
          this.errorList = "⚠️ Failed to load teams.";
        })
        .finally(() => {
          this.loadingList = false;
        });
    },

    getTeamDetails(team) {
      this.teamDetails = team;
      this.owner = null;
      this.errorOwner = "";
      this.loadingOwner = true;

      fetch(`http://localhost:8000/api/owner/${team.owner_id}`)
        .then(res => res.json())
        .then(data => {
          this.owner = data;
        })
        .catch(() => {
          this.errorOwner = "⚠️ Failed to load owner details.";
        })
        .finally(() => {
          this.loadingOwner = false;
        });
    }
  }
});

app.mount("#app");
