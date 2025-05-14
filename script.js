// Set to store selected tags
const selectedTags = new Set();
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const results = document.getElementById('results');

// Help responses for each tag
const helpResponses = {
  anxiety: "Talk to a school counselor or a trusted adult. You can also text 'TALK' to 741741 for free 24/7 crisis support.",
  suicidal: "Please call 1-800-273-TALK (8255) or talk to someone immediately. You can also walk into the Counseling or CST Office.",
  depression: "You’re not alone. Reach out to a trusted adult or use the MY3 App (https://my3app.org) to stay connected to support.",
  bullied: "Let a teacher, counselor, or administrator know. You can also email anonymously to speakup@mhrd.org.",
  fighting: "Conflict can be scary. Talk to a school staff member or peer mediator for help resolving issues.",
  report: "You can anonymously report concerns by emailing speakup@mhrd.org.",
  friend-suicidal: "Call 1-800-273-TALK (8255) on your friend's behalf or get help from a counselor immediately.",
  friend-help: "You can be a lifeline. Talk to a trusted adult about how to support your friend.",
  unsafe-home: "Tell a trusted adult at school or email speakup@mhrd.org. You deserve to feel safe.",
  physical-health: "Visit the school nurse or let a teacher know so they can help you get support."
};

// Add change event listeners to all checkboxes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const tag = checkbox.getAttribute('data-tag');
    if (checkbox.checked) {
      // Add tag if checkbox is checked
      selectedTags.add(tag);
    } else {
      // Remove tag if checkbox is unchecked
      selectedTags.delete(tag);
    }
  });
});

// Add click event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', () => {
  if (selectedTags.size === 0) {
    // Show a message if no options were selected
    results.innerHTML = "<p>Please select at least one issue above.</p>";
    results.style.display = "block";
    return;
  }

  // Display results based on selected tags
  let output = "<h2>Here’s how you can get help:</h2><ul>";
  selectedTags.forEach(tag => {
    if (helpResponses[tag]) {
      output += `<li>${helpResponses[tag]}</li>`;
    }
  });
  output += "</ul><p>You’re not alone. Help is here at Morris Knolls and beyond. 💛</p>";
  results.innerHTML = output;
  results.style.display = "block";
});
