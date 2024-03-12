
require([
  "esri/WebScene",
  "esri/core/reactiveUtils",
  "esri/views/SceneView",

  "esri/widgets/Daylight/DaylightViewModel",
  "esri/widgets/Weather/WeatherViewModel",
], function(
  WebScene,
  reactiveUtils,
  SceneView,

  DaylightViewModel,
  WeatherViewModel,
) {

  // Weather UI elements
  const weatherContainer = document.getElementById("weather-container");
  const weatherButtons = weatherContainer.querySelectorAll("button");
  const weatherSettingsInputs = weatherContainer.querySelectorAll("input");

  // Add "click" event listeners for each weather button.
  weatherButtons.forEach((button) => (button.onclick = () => onWeatherButtonClick(button)));

  // Add "input" event listeners for each weather input.
  weatherSettingsInputs.forEach((input) => {
    input.addEventListener("input", (event) => onWeatherInputChange(event.target))
  });
  
  // Daylight UI elements
  const timeInput = document.getElementById("time-input");
  const playButton = document.getElementById("play");

  // Add "input" event listener to the time 'range input'.
  timeInput.addEventListener("input", (event) => onTimeInputChange(event.target));

  // Add "click" event listener to toggle time animation.
  playButton.onclick = () => animateTimeChange();
  
  // Seasons UI elements
  const seasonsContainer = document.getElementById("seasons-container");
  const seasonsButtons = seasonsContainer.querySelectorAll("button");

  // Add "click" event listeners for each season button.
  seasonsButtons.forEach((button) => button.onclick = () => onSeasonsButtonClick(button));

  const scene = new WebScene({
    portalItem: {
      id: "6358da611a9342dbba1ec22ffcdaf62a"
    }
  });

  const view = new SceneView({
    map: scene,
    timeZone: "America/New_York",
    container: "viewDiv",
    environment: {
      lighting: {
        type: "sun",
        cameraTrackingEnabled: false,
        directShadowsEnabled: true
      }
    }
  });

  // Add UI containers to the view.
  view.ui.add("environment-container", "top-right");

  const daylightVM = new DaylightViewModel({ view });

  const weatherVM = new WeatherViewModel({ view });

  // Update icon based on DaylightViewModel animating.
  reactiveUtils.watch(
    () => daylightVM.dayPlaying, 
    (playing) => {
      const iconNode = playButton.firstElementChild;

      // Show either "play" or "pause" icon depending on animation state.
      iconNode.classList.toggle("bi-play", !playing);
      iconNode.classList.toggle("bi-pause", playing);
    }
  );

  // Sync HTML range input with expected position when animating.
  reactiveUtils.watch(
    () => daylightVM.timeSliderPosition, 
    (value) => {
      // Avoid update if input element is already in sync with DaylightViewModel.
      // Ensure proper data types are compared; 'timeInput.value' is a string.
      if (timeInput.value !== value.toString()) {
        timeInput.value = value;
      }
    }
  );

  // Update 'current time' label based on environment time
  reactiveUtils.watch(
    () => view.environment.lighting.date,
    (date) => {
      // Ensures the time displayed in the UI reflects the data's 
      // timeZone instead of the browser's current timeZone.
      const label = date.toLocaleTimeString('en-US', { timeZone: view.timeZone });

      document.getElementById("time-label").textContent = label;
    }
  );

  // Update weather slider interactivity based on current weather type.
  reactiveUtils.watch(
    () => view.environment.weather,
    () => {
      const weather = view.environment.weather;
      const defaultValue = 0.5;
  
      // Ensure only the targeted item is 'active'
      weatherButtons.forEach((item) => item.classList.toggle("active", item.name === weather.type));
      
      weatherSettingsInputs.forEach((input) => {
        const supports = input.name in weather;

        // Adds the 'disabled' attribute to each input if the current
        // weather type does not support this particular setting.
        // Reset 'value' back to the default if the input is disabled.
        input.toggleAttribute("disabled", !supports);
        input.value = supports ? weather[input.name] : defaultValue;
      });
    }, 
    // Ensure the watcher runs immediately.
    { initial: true }
  );

  // Update weather slider interactivity based on current weather type.
  reactiveUtils.watch(
    () => daylightVM.currentSeason, 
    (season) => {
      seasonsButtons.forEach((button) => {
        button.classList.toggle("active", button.name === season);
      });
    }, 
    // Ensure the watcher runs immediately.
    { initial: true }
  );

  // Update the view's current weather using WeatherViewModel utility method.
  function onWeatherButtonClick(button) {
    weatherVM.setWeatherByType(button.name);
  }

  // Sync the current weather settings when an input changes.
  function onWeatherInputChange(input) {
    view.environment.weather[input.name] = parseFloat(input.value);
  }
  
  // Adjust the view's current time using DaylightViewModel.
  // This is typically activated whenever 'timeInput' changes.
  // Current value of the input represents "minutes since midnight".
  function onTimeInputChange(input) {
    daylightVM.timeSliderPosition = parseFloat(input.value);
  }

  // Update the view's season via DaylightViewModel.
  function onSeasonsButtonClick(button) {
    daylightVM.currentSeason = button.name;
  }

  // Update associated UI when animation is toggled.
  function animateTimeChange() {
    daylightVM.dayPlaying = !daylightVM.dayPlaying;
  }
  
});

