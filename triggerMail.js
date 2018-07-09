var Express = require('express');
var Webtask = require('webtask-tools');
var bodyParser = require('body-parser');
var sendgrid = require('sendgrid')("<--sendgrid-id-->");
var app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const _ALL_MERCHANTS =[];
_ALL_MERCHANTS[1] = {name:"Mega Mart",sender:"noreplay@megamart.com"};
_ALL_MERCHANTS[2] = {name:"Glam Shop",sender:"noreply@glamshop.com"};
_ALL_MERCHANTS[3] ={name: "Romantic Musical Night",sender:"sales@sgevents.com"};


const _ALL_PRODUCTS ={
        "1": {
            "id": 1,
            "name": "Cold Shoulder Pencil Dress",
            "price": 20,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-19.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "2": {
            "id": 2,
            "name": "Black floral full sleeve Dress ",
            "price": 60,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-16.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "3": {
            "id": 3,
            "name": "Yellow Fluted Sleeve Shift Dress ",
            "price": 48,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-15.jpg",
            "merchId": "1",
            "category": "clothes"
        },
       "4": {
            "id": 4,
            "name": "Print Off Shoulder Dress ",
            "price": 32,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-14.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "5" : {
            "id": 5,
            "name": "Pink Front V neck Dress",
            "price": 56,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-13.jpg",
            "merchId": "1",
            "category": "clothes"
        },
       "6" : {
            "id": 6,
            "name": "Loose kimono",
            "price": 16,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-12.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "7": {
            "id": 7,
            "name": "Bridesmaid Structured Lace Midi Dress",
            "price": 82,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-11.jpg",
            "merchId": "1",
            "category": "clothes"
        },
       "8" : {
            "id": 8,
            "name": "Navy Short Sleeve Shirt Dress",
            "price": 35,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-10.jpg",
            "merchId": "1",
            "category": "clothes"
        },
       "9" : {
            "id": 9,
            "name": "Zip-Up Fit  Sleeve less Flare Dress",
            "price": 60,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-17.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "10" : {
            "id": 10,
            "name": "Old Shoulder Fit and Flare Dress",
            "price": 75,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-18.jpg",
            "merchId": "1",
            "category": "clothes"
        },
       "11" : {
            "id": 11,
            "name": "Jual Kaos Mango Wanita Original",
            "price": 22,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-9.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "12" : {
            "id": 12,
            "name": "Broderie Sleeve Detail Sweatshirt",
            "price": 48,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-8.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "13" : {
            "id": 13,
            "name": "Blush Long Trench",
            "price": 75,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-7.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "14" : {
            "id": 14,
            "name": "Nightgown",
            "price": 16,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-5.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "15" : {
            "id": 15,
            "name": "Kaftan Pleated Skirt",
            "price": 72,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-4.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "16" : {
            "id": 16,
            "name": "Empire line Dress ",
            "price": 45,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-3.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "17" : {
            "id": 17,
            "name": "Mandarin Collar Top",
            "price": 60,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-2.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "18" : {
            "id": 18,
            "name": "Casual Full sleeve Skirt",
            "price": 75,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-1.jpg",
            "merchId": "1",
            "category": "clothes"
        },
       "19" : {
            "id": 19,
            "name": "Garnet Maxi Dress",
            "price": 36,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-16.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "20" : {
            "id": 20,
            "name": "OZip-Up and Flare Dress",
            "price": 75,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-17.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "21" : {
            "id": 21,
            "name": "Shoulder Ft & Flare Dress",
            "price": 69,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-18.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "22" : {
            "id": 22,
            "name": "Cold-Shoulder-Pencil-Dress",
            "price": 95,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-19.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "23" : {
            "id": 23,
            "name": "rizalman bridal wear dress",
            "price": 60,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-20.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "24" : {
            "id": 24,
            "name": "yellow Fluted Sleeve Shift Dress ",
            "price": 80,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-15.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "25" : {
            "id": 25,
            "name": "Cold Shoulder Fit and Flare Dress",
            "price": 28,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-14.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "26" : {
            "id": 26,
            "name": "Pink Waterfall Front V neck Dress",
            "price": 20,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-13.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "27" : {
            "id": 27,
            "name": "Loose kimono Party dress",
            "price": 90,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-12.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "28" : {
            "id": 28,
            "name": "Bridesmaid Structured Lace Midi Dress ",
            "price": 50,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-11.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "29" : {
            "id": 29,
            "name": "Work dress essentials - sleeveless shift dress",
            "price": 60,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-10.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "30" : {
            "id": 30,
            "name": "Jual Kaos Mango Wanita Original",
            "price": 70,
            "image": "https://res.cloudinary.com/debray/image/upload/v1530593949/image-9.jpg",
            "merchId": "1",
            "category": "clothes"
        },
        "1299": {
            "id": 1299,
            "name": "Happy Ninja Shirt",
            "price": 18,
            "image": "https://res.cloudinary.com/debray/image/upload/v1531032602/T_7_front.jpg",
            "merchId": "2",
            "category": "clothes"
        },
        "1300": {
                    "id": 1300,
                    "name": "Happy Ninja Hoodie",
                    "price": 35,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032601/hoodie_4_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1298": {
                    "id": 1298,
                    "name": "Ninja Silhoutte",
                    "price": 20,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032602/T_5_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1301": {
                    "id": 1301,
                    "name": "Ninja Hoodie",
                    "price": 30,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032601/hoodie_6_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1339": {
                    "id": 1339,
                    "name": "Patient Ninja",
                    "price": 35,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032601/hoodie_3_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1295": {
                    "id": 1295,
                    "name": "Premium Cloth",
                    "price": 20,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032602/T_2_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1296": {
                    "id": 1296,
                    "name": "Ship your Idea Shirt",
                    "price": 20,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032602/T_4_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1297": {
                    "id": 1297,
                    "name": "Ship your Idea Hoodie",
                    "price": 20,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032601/hoodie_5_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1291": {
                    "id": 1291,
                    "name": "Woo Logo Shirt",
                    "price": 18,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032602/T_1_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1292": {
                    "id": 1292,
                    "name": "Woo Logo Hoodie",
                    "price": 35,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032601/hoodie_6_front.jpg ",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1293": {
                    "id": 1293,
                    "name": "Woo Ninja Shirt",
                    "price": 20,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032602/T_6_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1294": {
                    "id": 1294,
                    "name": "Woo Ninja Hoodie",
                    "price": 35,
                    "image": "https://res.cloudinary.com/debray/image/upload/v1531032601/hoodie_3_front.jpg",
                    "merchId": "2",
                    "category": "clothes"
                },
        "1500": {
            "id": 1500,
            "name": "Musical Night Ticket",
            "price": 60,
            "image": "https://res.cloudinary.com/debray/image/upload/v1531032602/landingpage.jpg",
            "merchId": "3",
            "category": "ticket"
        }
    };
    

const MAIL_HEADER = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title></title>
  <style type="text/css">
    #outlook a {padding:0;}
    body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;} /* force default font sizes */
    .ExternalClass {width:100%;} .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Hotmail */
    table td {border-collapse: collapse;}
    @media only screen and (min-width: 600px) { .maxW { width:600px !important; } }
  </style>
</head>
<body style="margin: 0px; padding: 0px; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF"><table bgcolor="#CCCCCC" width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td valign="top">
<!--[if (gte mso 9)|(IE)]>
<table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top">
<![endif]-->
<table width="100%" class="maxW" style="max-width: 600px; margin: auto;" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td valign="top" align="center">


<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  `;

const MAIL_FOOTER = `
  
    <tr>
    <td align="left" valign="middle" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 14px; color: #353535; padding:3%; padding-top:40px; padding-bottom:40px;">
      Payment : Visa CartGrab (Track Order )
    </td>
  </tr>
  <tr>
    <td align="left" valign="middle" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 14px; color: #353535; padding:3%; padding-top:40px; padding-bottom:40px;">
      Thanks for shopping with&nbsp;us! <!-- using &nbsp; will prevent orphan words -->
    </td>
  </tr>
</table>


</td></tr></table>
<!--[if (gte mso 9)|(IE)]>
</td></tr></table>
<![endif]-->
</td></tr></table></body></html>`;

const getOrderTotal = (order) => {
    let total = 0;
    order.products.forEach(p => {
        total += _ALL_PRODUCTS[p].price;
    });
    return total;
};

const getMailContentAsString = (order) =>   `<tr>
    <td align="left" valign="middle" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 24px; color: #353535; padding:3%; padding-top:40px; padding-bottom:40px;">
      Order Confirmation - Invoice ${Math.floor((Math.random() * 196) + 20)}
    </td>
  </tr>
  <tr>
    <td align="center">
      <table width="94%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td width="70%" align="left" bgcolor="#252525" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 12px; color: #EEEEEE; padding:10px; padding-right:0;">
            Item
          </td>
          <td width="30%" align="right" bgcolor="#252525" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 12px; color: #EEEEEE; padding:10px; padding-left:0;">
            Price
          </td>
        </tr>
		${order.products.map(product => `<tr>
          <td width="70%" align="left" bgcolor="#EEEEEE" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 12px; color: #252525; padding:10px; padding-right:0;">
            <img src="${_ALL_PRODUCTS[product].image}" width="40" height="40"/>${_ALL_PRODUCTS[product].name}
          </td>
          <td width="30%" align="right" bgcolor="#EEEEEE" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 12px; color: #252525; padding:10px; padding-left:0;">
            $${_ALL_PRODUCTS[product].price}
          </td>
        </tr>`)}
        <tr>
          <td width="70%" align="right" bgcolor="#FFFFFF" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 12px; color: #252525; padding:10px; padding-left:0;">
            <b>TOTAL</b>
          </td>
          <td width="30%" align="right" bgcolor="#FFFFFF" style="font-family: Verdana, Geneva, Helvetica, Arial, sans-serif; font-size: 12px; color: #252525; padding:10px; padding-left:0;">
            <b>${getOrderTotal(order)}</b>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
  

const getOrderEmail = (recipient,order)=>{
  let email = new sendgrid.Email();
  let merchant = _ALL_MERCHANTS[order.merchant];
  email.addTo(recipient);
  email.setFrom(merchant.sender);
  email.setSubject(`${merchant.name} - Order Confirmation`);
  let contents = [];
  contents.push(MAIL_HEADER);
  contents.push(getMailContentAsString(order));
  contents.push(MAIL_FOOTER);
  email.setHtml(contents.join(''));
  return email;
}

app.post('/trigger', (req, res) => {
       let data = req.body;
       let recipient = data.to || "defaultmail@gmail.com";
      data.orders.forEach((order)=> {
          sendgrid.send( getOrderEmail(recipient, order));
      });
     res.json({"status":"success"});
});

module.exports = Webtask.fromExpress(app);
