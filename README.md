# Help An Angel - Animal Welfare
This project was developed in order to connect NGOs that need some kind of help to people who can contribute.
It is an application developed with Node.js on the back-end, ReactJS on the front-end and React Native on mobile.

## Features

WEB Version
* Register the NGO to later generate an ID that allows you to login to the application.
* Register the Cases by filling in all fields such as Case Title, Description and Value.

Mobile Version
* The User will be able to see the cases registered by all NGOs that use the system.
* The User may contact the NGO through Email or Whatsapp that was informed at the time of registration.

IMPORTANT: The WEB version is for the exclusive use of the NGO, for registration of cases and general maintenance of the account, while the mobile version is only for users to have access to the cases and to contact NGOs to make a contribution.

## Screenshots
<table>
	<tr>
		<th width="100%">
			Web Interface<br>
		</th>
	</tr>
	<tr>
		<td>
      <br>
			<img width="1080" src="https://user-images.githubusercontent.com/68481189/94343351-eb67c580-ffed-11ea-8994-4b81836c7dd9.png">
		</td>   
	</tr>
  <tr>
   <td>
      <br>
			<img width="1080" src="https://user-images.githubusercontent.com/68481189/94724099-23457480-0330-11eb-9648-00094a1cdfb6.png">
		</td>   
  </tr>
  <tr>
   <td>
      <br>
			<img width="1080" src="https://user-images.githubusercontent.com/68481189/94724106-25a7ce80-0330-11eb-80dd-c1f48b2f1ed4.png">
		</td>   
  </tr>
  <tr>
   <td>
      <br>
			<img width="1080" src="https://user-images.githubusercontent.com/68481189/94343355-f15da680-ffed-11ea-9668-6d99dacc9ab4.png">
		</td>   
  </tr>
</table>

<table>
	<tr>
		<th width="33.3%">
			App - Splash Screen<br>
		</th>
		<th width="33.3%">
			App - Cases
		</th>
    <th width="33.3%">
			App - Details
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img width="618" src="https://user-images.githubusercontent.com/68481189/95242234-487d2b80-07e5-11eb-924b-1a5700a2d54e.png">
		</td>
		<td>
			<img width="618" src="https://user-images.githubusercontent.com/68481189/95242240-49ae5880-07e5-11eb-979f-149e4637f4d6.png">
		</td>
    <td>
			<img width="618" src="https://user-images.githubusercontent.com/68481189/95242242-4adf8580-07e5-11eb-9910-c2220dec51b3.png">
		</td>
	</tr>
</table>

## Getting started
To execute the project, it will be necessary to install / use the following applications:
* Node.js
* NPM
* React
* Express

## Technologies
* **Backend**: A RESTful API was created using Node.js, Express, Cors. This API was integrated into an SQLite database using Knex. At the end of the development process, data validation on the routes was implemented using the Celebrate library. Unit and integration tests were developed using the Jest, Supertest and cross-environment libraries.
* **Website**: ReactJS.
* **Mobile**: React Native and Expo.
