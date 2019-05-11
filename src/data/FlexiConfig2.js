const flexiConfig2 = {
  items: [
    {
      "name": "1",
      "label": "Person's Name",
      "type": "TextField",
      "children": [{
        "name": "1.1_1",
        "label": "First Person's Name", 
        "type": "TextField",
      }]
    },
    {
      "name": "2",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
      ],
      "children":{
        "name": "2.2",
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
      "name": "3",
      "label": "Person's Name",
      "type": "TextField",
      "children": [{
        "name": "3.1_1",
        "label": "First Person's Name",
        "type": "TextField",
      },
      {
        "name": "3.1_2",
        "label": "First Person's Name",
        "type": "TextField",
      },
      {
        "name": "3.1_3",
        "label": "First Person's Name",
        "type": "TextField",
        children: {
          "name": "3.1_3.1",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
                    "Maharashtra",
                    "Kerala",
                    "Tamil Nadu"
          ],
          "children":{
            "name": "3.1_3.1.1",
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

export default flexiConfig2;