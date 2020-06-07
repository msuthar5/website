/*
	Array of objects that contain the project descriptions for each project.
	Each object has a name, description, and meta-data along with several links.
*/

var projects = [
{
	name: "Artificial Intelligence: N-Queens",
	description: "The goal of the N-Queens game is to place N queens on an NxN chess board so no queen can attack another queen. We can view the problem space as a large tree, and the objective is to traverse this tree until we reach a solution. The problem space is exponential in the number of queens (n^n). The naive solution is to do a depth first traversal of this problem space which is not feasable. To effectively solve this problem, we implement the arc-consistency algorithm. Arc-consistency will prune the problem space and make our deapth first traversal much more efficient. The idea is that once we place a queen on the board, we prune the \"domains\" of the remaining queens and continue to do so (with backtracking) until the domain's of all queens are consistent with one another",
	meta_data: ["Written in python", "Implemented Backtracking DFS search", "Implemented the solution using the Least Constrained Values Heuristic to reduce problem space", "Implemented arc consistency with forward checking (on top of LCV) to prune the problem space drastically", ["Optimized the brute force implementation by reducing the total number of placements of Qeens until a solution is found", "8 Queens: brute-force: 113, AC3: 15", "10 Queens: brute-force: 102, AC3: 10", "20 Queens: brute-force: 199,500, AC3: 27"] ],
	github_link: "https://github.com/msuthar5/Artificial-Intelligence/tree/master/nqueens",
	learn_more_link: ["Learn more about constraint satisfaction", "http://web.stanford.edu/class/cs221/lectures/csp1.pdf"]
},
{
	name: "Artificial Intelligence: Alpha-Beta Pruning",
	description: "Connect 5 is a much harder version of the traditional connect 4 game. The goal is to implement the alpha-beta pruning algorithm to try to beat the comupterized player. Alpha Beta pruning is a search algorithm that aims to minimize the number of nodes that are evaluated by the minimax algorithm in its search tree. This works assuming that the opponent is playing optimally. Below is a link to learn more about how Alpha Beta pruning works",
	meta_data: ["Implemented the alpha beta algorithm in Python", "Added heuristics for vertical streaks, horizontal streaks that give a more accurate score to a potential \"move\""],
	github_link: "https://github.com/msuthar5/Artificial-Intelligence/tree/master/minimax",
	learn_more_link: ["Learn more about Alpha Beta and MiniMax", "http://web.cs.ucla.edu/~rosen/161/notes/alphabeta.html"]
},
{
	name: "NLP: Inverted Index & Boolean Queries",
	description: "Generated an inverted index with tf-idf (term frequency-inverted document frequency) weightings for every term in a document's vocabulary. While this may seem a trivial task, the tough part is to compute the tf-idf scores optimally as the run time is heavily dependent on the size of the vocabulary and number of documents. We compute the tf-idf scores with a linear iteration through our inverted index after all terms have been tokenized. This linear pass, post tokenization, reduces the run-time by a factor of n (# of terms in the vocabulary)",
	meta_data: ["Written in Python", "Parsed 100 documents, tokenized each term, and computed tf-idf optimally for efficiency", "Implemented boolean query functionality (AND/OR queries i.e. term1 AND term2...) that returns all documents satisfying the query","Implemented linear merge or posting lists algorithm (generalizes set intersection to an arbritrary number of lists)"],
	github_link: "https://github.com/msuthar5/InformationRetrieval/tree/master/inverted_index_construction",
	learn_more_link: ["Learn more about inverted-index construction", "https://nlp.stanford.edu/IR-book/html/htmledition/a-first-take-at-building-an-inverted-index-1.html"]
},
{
	name: "NLP: Ranked Retrieval",
	description: "Built on-top of the naive boolean retrieval, I implemented heuristics for returning a ranked set of relevent documents with respect to the input query. The Heuristics implemented are Cluster Pruning, Champion's List, and Index Elimination. These heuristics have a mathematical foundation built on high dimensional vector spaces. After Implementing the heuristics, I conducted an experimental study to see how the run-time of each heuristic is impacted by the complexity/length of the query",
	meta_data: ["Written in Python", "Generated tf-idf based inverted index", "Implemented efficient cosine similarity function (FastCosineSimilarity from Stanford NLP)"],
	github_link: "https://github.com/msuthar5/InformationRetrieval/tree/master/ranked_retrieval",
	learn_more_link: ["Learn more about ranked retrieval", "https://nlp.stanford.edu/IR-book/html/htmledition/inexact-top-k-document-retrieval-1.html"],
	src_link: ["img/ranked_retrieval_graph.png", "56%", "80%"]
},
{
	name: "K-means Clustering",
	description: "Implemented the k-means algorithm, as a preprocessing technique, to cluster documents for ranked retrieval. The idea is that if we have clustered every document around the k centroids, then given some query Q, we locate the cluster centroid that is closest to Q (in vector space) and then return the N docuemnts from that cluster that are closest to Q.",
	meta_data: ["Written in Python", "Generated tf-idf based inverted index", "Each initial centroid is computed at the average of N random docuemnts (to ensure we avoid bad initial centroids)", "Proximity metric used: Eucliden Distance", "Conducted an experimental study to find out the optimal number for clusters for the TIME dataset"],
	github_link: "https://github.com/msuthar5/InformationRetrieval/tree/master/kmeans",
	learn_more_link: ["Learn more about K-Means Clustering!", "https://nlp.stanford.edu/IR-book/html/htmledition/k-means-1.html"],
	src_link: ["img/kmeans_graph.png", "56%", "80%", "The optimal value for K is identified by the \"knee\" in the graph. From above, the best values of K are 7-8 and 20-23"]
},
{
	name: "Decision Tree Classifier",
	description: "Trained a decision tree classifier and naive bayes classifier to predict whether or not a patient is subject to future liver diseases",
	meta_data: ["Implemented in R", "Dataset from UCI repository", "Pre-processed and cleaned the dataset", "Used rpart module to train and test models", "Feature selection to identify optimal feature set for the most accurate model", "Plotted ROC curves and analyzed accuracy rates to identify the best model"],
	learn_more_link: ["Learn more about Decision Trees!", "https://towardsdatascience.com/decision-tree-classification-de64fc4d5aac"],
	github_link: "https://github.com/msuthar5/Machine-Learning/tree/master/R-based/classification"
},
{
	name: "Aprori: Market Basket Analysis",
	description: "Used the Aprori algorithm on a grocery purchasing dataset. The idea is to extract the most relevent rules to give insight as to how customers purchase items. This insight can be used to help stores optimize product placement to maximize sales. The top 5 rules with respect to lift, support, and confidence were extracted.",
	github_link: "https://github.com/msuthar5/Machine-Learning/tree/master/R-based/market-basket-analysis",
	learn_more_link: ["Learn more about the Aprori Algorithm", "https://www.geeksforgeeks.org/apriori-algorithm/"]
},
{
	name: "Pagerank",
	description: "Implemented the Pagerank algorithm on input web-graphs (a path from siteA to siteB exists if there is link from siteA to siteB)",
	meta_data: ["Written in Python", "Read input web-graph and developed a transition matrix", "Converted transition matrix to teleportation matrix with teleportation rate: 0.14", "repeated matrix multiplication until steady-state principal eigenvector converged to ensure graph is an ergodic markov chain", "*initial steady state vector had entires of 1/#pages for each site*"],
	github_link: "https://github.com/msuthar5/algorithms/tree/master/pagerank",
	learn_more_link: ["Learn Pagerank!", "https://nlp.stanford.edu/IR-book/html/htmledition/the-pagerank-computation-1.html"]
},
{
	name: "Kream: An Online Retailer",
	description: "Developed a full-stack web-application to simulate an Amazon-like online retailer. This role based application supports customers, retailers, and employees of the imaginary company, Kream.",
	meta_data: ["Front end: HTML, CSS, JavaScript", "Back end: Python", "used Django as the model view controller", "designed, implemented, and maintained a SQL database for data inventory"],
	github_link: "https://github.com/msuthar5/Kream",
},
{
	name: "ParkPay: RESTful API",
	description: "Developed a completely automated REST API parking system for remote tourist attractions. This project required mainting a RESTful interface, data inventory system (no databases allowed), test script (unit & integration testing), and desiging a code base follows the S.O.L.I.D. software principles. This project was for my Object Oriented Programming class (CS445) so the emphasis was on using proper development and testing principles.",
	meta_data: ["Back end: Python", "Flask API framework to maintain the REST inferface", "Used code coverage to verify that 90%+ of the entire code base was tested", "Developed wrapper BASH script to install, run, and test the service", "maintained data inventory using serialization and dictionaries as the primary data structure. Each entity had its own hashmap"],
	learn_more_link: ["View the project requirements", "http://www.cs.iit.edu/~virgil/cs445/mail.fall2018/project/project.html"],
	github_link: "https://github.com/msuthar5/cs445/tree/master/final_project"
}];

// the container for all of the projects
section = document.getElementById("projects-section");

/*
	Loop over the projects array and add it to the document
*/
function populate_projects(){
	for (var i = 0; i < projects.length; i++) {
		add_project(projects[i]);
	}
}

/*
	generate the description element of the project
*/
function create_description_tag(project){
	let description = document.createElement("p");
	description.setAttribute("class","text-chunk");
	description.innerHTML = project.description;
	return description;

}

/*
	generate the name element of the project
*/
function create_name_tag(project){

	let name_tag = document.createElement("p");
	name_tag.setAttribute("class","education red-header");
	name_tag.innerHTML = project.name;

	return name_tag;
}
/*
	recursive function to generate a nested unordered element
*/
function create_list_tag(project_list){
	let list_tag = document.createElement("ul");

	for (let i = 0; i < project_list.length; i++){
		let element = null;
		if (Array.isArray(project_list[i])){
			// recursive call
			element = create_list_tag(project_list[i]);
		}
		else {
			element = document.createElement("li");
			element.setAttribute("class", "text-chunk");
			element.innerHTML = project_list[i];
		}
		list_tag.appendChild(element);
	}
	return list_tag;
}

/*
	This function takes the parameter, project, and
	generates an HTML element for the project
*/
function add_project(project) {

	// div container
	let container = document.createElement("div");
	let name_tag = create_name_tag(project);
	container.appendChild(name_tag)

	// description tag
	let description_tag = create_description_tag(project);
	container.appendChild(description_tag);

	// add meta-data as a nested list
	if ('meta_data' in project) {
		let list_tag = create_list_tag(project.meta_data);
		container.appendChild(list_tag);
	}

	// add src link as a figure tag with optional caption
	if ('src_link' in project) {

		let src_tag = document.createElement("img");
		let figure = document.createElement("figure");

		// each image may have different height and width requirements
		src_tag.setAttribute("height", project.src_link[1]);
		src_tag.setAttribute("width", project.src_link[2]);
		src_tag.setAttribute("src", project.src_link[0]);

		figure.appendChild(src_tag);
		// project has a figcaption
		if (project.src_link.length > 3){

			let fig_caption = document.createElement("figcaption");
			fig_caption.innerHTML = project.src_link[3];
			figure.appendChild(fig_caption);
		}

		container.appendChild(figure);

	}

	// add the link to the source code as a div tag
	if ('github_link' in project) {
		let a_tag = document.createElement("a");
		a_tag.innerHTML = "View the source code";
		a_tag.appendChild(document.createElement("br"));
		a_tag.setAttribute("class", "text-chunk external-link");
		a_tag.setAttribute("href", project.github_link);
		container.appendChild(a_tag);
	}

	// add the link to learn more about the project as a div tag
	if ('learn_more_link' in project) {
		let a_tag = document.createElement("a");
		a_tag.innerHTML = project.learn_more_link[0];
		a_tag.setAttribute("class", "text-chunk external-link");
		a_tag.setAttribute("href", project.learn_more_link[1]);
		container.appendChild(a_tag);
	}


	// add the generated element to the DOM
	section.appendChild(container);
	// add project-section divider
	container.appendChild(document.createElement("hr"));

}


// controller function to add projects to DOM
function init() {
	section.appendChild(document.createElement("hr"));
	populate_projects();
}

init();
