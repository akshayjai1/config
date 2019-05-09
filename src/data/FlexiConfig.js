const flexiConfig = {
  items: [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": "TextField",
      "children": [{
        "name": "person_name_1",
        "label": "First Person's Name",
        "type": "TextField",
      }]
    },
    {
      "name": "states",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
      ],
      "children":{
        "name": "states_2",
        "label": "Person's state",
        "type": "DropDown",
        "values": [
                  "Maharashtra",
                  "Kerala",
                  "Tamil Nadu"
        ],
      }
    },
    {
      "name": "person_name_3",
      "label": "Person's Name",
      "type": "TextField",
      "children": [{
        "name": "person_name_31",
        "label": "First Person's Name",
        "type": "TextField",
      },
      {
        "name": "person_name_32",
        "label": "First Person's Name",
        "type": "TextField",
      },
      {
        "name": "person_name_33",
        "label": "First Person's Name",
        "type": "TextField",
        children: {
          "name": "states_3",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
          ],
          "children":{
            "name": "states_31",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
                      "Maharashtra",
                      "Kerala",
                      "Tamil Nadu"
            ],
          }
        }
      }
      ]
    }
   ]
};

export default flexiConfig;