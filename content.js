function loadLink() {
  const title = $( ".head-ref" ).first().attr("title");
  const [repo, branch] = title.split('/')[1].split(':');
  const command = `cd ~/${repo} && git pull && git checkout ${branch}`;

  const newContent = `
  <div class="copy-head-ref-section">
    <a id="copy-command-link">
      Copy to Clipboard
    </a>
    <input class="copy-head-ref" type="text" id="copy-head-ref" value=\"${command}\" />
  </div>`;

  $("#partial-discussion-header").after(newContent);

  $(document).on('click', '#copy-command-link', (event) => {
    const copyText = document.getElementById("copy-head-ref");
    copyText.select();
    document.execCommand("copy");
  });
}

loadLink();
