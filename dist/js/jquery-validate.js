var cleave = new Cleave('input[name=phone]', {
    phone: true,
    phoneRegionCode: 'UA',
    prefix: '+380',
});
$("#consultation .feed-form").validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            minlength: 16
        }
    }
});