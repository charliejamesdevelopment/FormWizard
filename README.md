# FormWizard
A easy-to-use form wizard / wizard jquery plugin integrating with the bootstrap framework.

# Features
- Simple & Easy Installation
- Unlimited Steps

# TO-DO's
- Customization:
    - Place of progress bar
    - Color of progress bar
    - Button placement
    - Title CSS & Placement

# Installation
```
<link rel="stylesheet" href="./wizard.css" />
<script type="application/javascript" href="./wizard.js"></script>
```
And you're done installing the library into your website.

To initialise it,

Defining a <section> tag creates a step, so if you had 5 sections, each section would be a step in the wizard.
To title a section, so it appears just before the content inside a section, use title="your_title" in the <section> tag.
```
<form method="post" action="/">
   <section title="Title 1">
      <input type="email" id="email" name="email" />
      <input type="password" id="password" name="password" />
   </section>
   
   <section title="Title 2">
      <p>Terms and conditions are...</p>
   </section>
</form>

<script>
    $("form").wizard()
</script>
```
And you're set. This would create a 2-step form with a email and password for the first step, and terms and conditions for the next!
