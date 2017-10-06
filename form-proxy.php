<?php

$postvars = '';

while ($element = current($_POST)) {
    $postvars .= str_replace('-', '+', key($_POST)).'='.$element.'&';
    next($_POST);
}

curl_setopt($session, CURLOPT_POST, true);
curl_setopt($session, CURLOPT_POSTFIELDS, $postvars);


$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://uclacrm.mkt5658.com/optimists-2016-opt-in/",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $postvars,
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/x-www-form-urlencoded",
    "postman-token: 1c09e81f-4774-53ec-d5e4-0fdcbc55c2f1"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}