<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>mydragdrop</title>
  <link rel="stylesheet" type="text/css" href="style/main.css">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
  <script type="text/javascript" src="scripts/script.js"></script>
  <script type="text/javascript" src="scripts/functions.js"></script>
  <script>

  </script>
</head>
<body>
	<div id="main">
		<div id="side_bar">
			<p>Components panel</p>
			<div class="componentsPanel">
				<div class="row">
					<div class="col-sm-6 text-center addRow">
						<div class="row panel panel-default">
							row
						</div>
					</div>
					<div class="col-sm-6 text-center addColumn">
						<div class="columns panel panel-default">
						   <div class="columnText">column</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6 text-center addModule">
						<div class="addText panel panel-default">
							text
						</div>
					</div>
					<div class="col-sm-6 text-center addModule">
						<div class="addImage panel panel-default">
							image
						</div>
					</div>
				</div>
			</div>
			<p>Settings panel</p>
			<div class="settingsPanel">
				<div class="row ">
	        <div class="col-md-6 text-center deleteButton">
	          <button class="deleteSelection panel panel-default">Delete</button>
	        </div>
			  </div>
			</div> <!-- end settingspanel -->
		</div> <!-- end sidebar -->

		<form id="template">
			<div class="wrapper">
				<div class="initialRow">
					<div class="col-sm-12">
						+
					</div>
				</div>
			</div>
			<div class="submit_container">
				<input class="btn btn-primary" type="submit" value="save" ></input>
        <a target="_blank" href="/preview.php" class="btn btn-primary" id="preview_button">preview</a>
			</div>
		</form>

	</div>
</body>
</html>