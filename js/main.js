const app = Vue.createApp({
  data() {
    return {
      teamsData: [],
      teams: [],
      teamDetails: null,
      owner: null,

      loadingList: true,
      loadingTeams: false,
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
      this.loadingList = true;
      this.errorList = "";

      fetch("http://localhost:8000/api/teams")
        .then((res) => res.json())
        .then((data) => {
          this.teamsData = data.sort((a, b) => a.team_name.localeCompare(b.team_name));
          this.teams = this.teamsData;
        })
        .catch(() => {
          this.errorList = "⚠️ Failed to load team list.";
        })
        .finally(() => {
          this.loadingList = false;
        });
    },

    getTeamDetails(id) {
      this.loadingTeams = true;
      this.loadingOwner = true;
      this.errorOwner = "";
      this.teamDetails = null;
      this.owner = null;

      const selectedTeam = this.teams.find((team) => team.id === id);

      if (selectedTeam) {
        this.teamDetails = selectedTeam;

        fetch(`http://localhost:8000/api/owner/${selectedTeam.owner_id}`)
          .then((res) => res.json())
          .then((data) => {
            this.owner = data;
            setTimeout(() => {
              const infoBox = document.querySelector("#info-box");
              if (infoBox) {
                infoBox.scrollIntoView({ behavior: "smooth" });
              }
            }, 300);
          })
          .catch(() => {
            this.errorOwner = "⚠️ Failed to load owner details.";
          })
          .finally(() => {
            this.loadingOwner = false;
          });
      } else {
        this.errorOwner = "⚠️ Team not found.";
      }

      this.loadingTeams = false;
    }
  }
}).mount("#app");
