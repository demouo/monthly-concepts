(function () {
  "use strict";

  var months = window.CONCEPT_MONTHS || [];
  var currentMonthKey = getCurrentMonthKey();
  var current = months.find(function (month) {
    return month.month === currentMonthKey;
  });
  var archive = document.getElementById("archive-list");
  var currentRoot = document.getElementById("current-month");
  var updated = document.getElementById("last-updated");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function stateLabel(month) {
    return month.state === "provisional" ? "Provisional" : "Archived";
  }

  function shanghaiParts(date) {
    var parts = {};
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(date).forEach(function (part) {
      parts[part.type] = part.value;
    });
    return parts;
  }

  function getCurrentMonthKey() {
    var parts = shanghaiParts(new Date());
    return parts.year + "-" + parts.month;
  }

  function formatMonthLabel(monthKey) {
    var values = monthKey.split("-");
    var monthDate = new Date(Number(values[0]), Number(values[1]) - 1, 1);
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "long"
    }).format(monthDate);
  }

  function formatSnapshotDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(date);
  }

  function conceptMarkup(concept) {
    var links = concept.links.map(function (link) {
      return (
        '<li class="source">' +
        '<span class="source-role">' + escapeHtml(link.role) + "</span>" +
        '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noreferrer">' +
        escapeHtml(link.title) +
        '<span class="external" aria-hidden="true">↗</span></a></li>'
      );
    }).join("");

    return (
      '<article class="concept">' +
      '<div class="concept-head">' +
      '<span class="rank">' + String(concept.rank).padStart(2, "0") + "</span>" +
      '<div><h3>' + escapeHtml(concept.concept) + "</h3>" +
      '<p class="contributor">' + escapeHtml(concept.contributor) + "</p></div>" +
      '<span class="status status-' + concept.status.toLowerCase() + '">' +
      escapeHtml(concept.status) + "</span>" +
      "</div>" +
      '<p class="thesis">' + escapeHtml(concept.thesis) + "</p>" +
      '<p class="why"><span>Why now</span>' + escapeHtml(concept.whyNow) + "</p>" +
      '<div class="concept-meta"><span>First public signal</span>' +
      "<time>" + escapeHtml(concept.published) + "</time></div>" +
      '<ol class="sources">' + links + "</ol>" +
      "</article>"
    );
  }

  function monthMarkup(month, open) {
    return (
      '<details class="month" id="month-' + escapeHtml(month.month) + '"' +
      (open ? " open" : "") + ">" +
      '<summary><span class="month-label">' + escapeHtml(month.label) + "</span>" +
      '<span class="month-state">' + stateLabel(month) + "</span>" +
      '<span class="summary-mark" aria-hidden="true">+</span></summary>' +
      '<div class="month-body"><p class="month-note">' + escapeHtml(month.note) + "</p>" +
      month.concepts.map(conceptMarkup).join("") +
      "</div></details>"
    );
  }

  if (current) {
    currentRoot.innerHTML =
      '<div class="month-heading">' +
      '<div><p class="eyebrow">' + escapeHtml(current.month.replace("-", " / ").toUpperCase()) +
      " · " + escapeHtml(stateLabel(current).toUpperCase()) + "</p>" +
      "<h2>" + escapeHtml(current.label) + "</h2></div>" +
      '<p class="month-note">' + escapeHtml(current.note) + "</p></div>" +
      '<div class="current-concepts">' + current.concepts.map(conceptMarkup).join("") + "</div>";
  } else {
    currentRoot.innerHTML =
      '<div class="month-heading">' +
      '<div><p class="eyebrow">' + escapeHtml(currentMonthKey.replace("-", " / ").toUpperCase()) +
      " · PROVISIONAL</p>" +
      "<h2>" + escapeHtml(formatMonthLabel(currentMonthKey)) + "</h2></div>" +
      '<p class="month-note">The current month is waiting for its editorial snapshot.</p></div>' +
      '<p class="empty">No concepts have been published for this month yet.</p>';
  }

  archive.innerHTML = months.filter(function (month) {
    return month.month !== currentMonthKey;
  }).map(function (month) {
    return monthMarkup(month, false);
  }).join("");

  updated.textContent = "Editorial snapshot · " + formatSnapshotDate(new Date());
})();
