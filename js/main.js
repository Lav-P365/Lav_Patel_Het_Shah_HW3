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

  mounted() {
    this.animateAppEntrance();
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
          this.$nextTick(() => {
            this.animateTeamCards();
          });
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
    
          this.$nextTick(() => {
            this.animateDetailSection();
    
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: "#details", offsetY: 50 },
              ease: "power2.inOut"
            });
          });
        });
    },
    

    animateAppEntrance() {
      gsap.from("#app", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.out"
      });
    },

    animateTeamCards() {
      gsap.utils.toArray(".team-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 40,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });
    },
    

    animateDetailSection() {
      gsap.from([".details-box", ".owner-box"], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }
});

app.mount("#app");