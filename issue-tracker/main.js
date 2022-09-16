document
  .getElementById('issueInputForm')
  .addEventListener('submit', submitIssue);

function submitIssue(e) {
  const getInputValue = (id) => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random() * 100000000) + '';
  let status = 'Open';

  console.log(assignedTo);

  if (!description) {
    alert('Write some description');
    return;
  }

  if (!assignedTo) {
    alert('You need to assign the issue to someone');
    return;
  }

  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')) {
    issues = JSON.parse(localStorage.getItem('issues'));
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('issueInputForm').reset();
  fetchIssues();
  e.preventDefault();
}

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');
  // console.log(issues, issuesList);
  issuesList.innerHTML = '';

  issues.forEach((issue) => {
    // console.log(issue);
    const { id, description, severity, assignedTo, status } = issue;

    issuesList.innerHTML += `<div class="bg-light mx-3 p-4 my-3 rounded-4">
                                <h6 class="mb-3">Issue ID: ${id} </h6>
                                <p><span class="bg-info text-white px-3 py-1 rounded-3"> ${status} </span></p>
                                <h3 id="description">
                                 ${
                                   status === 'Closed'
                                     ? `<del>${description}</del>`
                                     : `${description}`
                                 }
                                </h3>
                                <p><span ><i class='bx bx-time-five'></i></span> ${severity}</p>
                                <p><span ><i class='bx bxs-user'></i></span> ${assignedTo}</p>
                                <a href="#" onclick="setStatusClosed('${id}')" class="btn btn-warning">Close</a>
                                <a href="#" onclick="deleteIssue('${id}')" class="btn btn-danger">Delete</a>
                             </div>`;
  });
};

const setStatusClosed = (id) => {
  // console.log(id);
  const issues = JSON.parse(localStorage.getItem('issues'));
  // console.log(issues);
  const currentIssue = issues.filter((issue) => issue.id === id);
  // console.log(currentIssue, currentIssue[0].status);
  currentIssue[0].status = 'Closed';
  localStorage.setItem('issues', JSON.stringify(issues));

  fetchIssues();
};

const deleteIssue = (id) => {
  const issues = JSON.parse(localStorage.getItem('issues'));

  const remainingIssues = issues.filter((issue) => issue.id !== id);
  localStorage.setItem('issues', JSON.stringify(remainingIssues));
  fetchIssues();
};
