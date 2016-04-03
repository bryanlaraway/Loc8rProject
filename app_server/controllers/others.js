/* GET 'about' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLo-fi literally ea voluptate mollit plaid. Crucifix commodo sint cold-pressed sunt. Authentic cold-pressed tacos, vero thundercats tousled gluten-free mustache. Dolor whatever XOXO, retro reprehenderit biodiesel mustache chia sunt. Meggings sartorial duis wayfarers. Quinoa migas dreamcatcher synth. Pour-over VHS synth austin vegan ad.'
    });
};