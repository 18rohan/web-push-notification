
<html>
    <head>
        <title>
            CI notifications
        </title></head>
    <body>
        <button onclick="subscription()">SUBSCRIBE</button>


        <script>
            addEventListener('load', async ()=>{
              let sw = await navigator.serviceWorker.register('sw.js');
              // console.log('hello');
              console.log(sw);
            });
            async function subscription(){

              
              // alert("hello");
              let sw = await navigator.serviceWorker.ready;
              alert(sw);
              let push = await sw.pushManager.subscribe({
                userVisibleOnly:true,
                applicationServerKey:'BFKc-Vv7zdeg1qSALj7Blw87zFZgmQHPYRRIrQQLYoo7KGoP1X_TEbALHxrug0xAUYUKhrAEF-uTvU7Wt1OGZSo'
              });
              console.log(JSON.stringify(push));
            }
          </script>
    </body>

</html>


<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log('Service Worker Registered!', reg);

    reg.pushManager.getSubscription().then(function(sub) {
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log('Not subscribed to push service!');
      } else {
        // We have a subscription, update the database
        console.log('Subscription object: ', sub);
      }
    });
  })
   .catch(function(err) {
    console.log('Service Worker registration failed: ', err);
  });
}