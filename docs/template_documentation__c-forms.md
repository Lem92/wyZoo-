
## Recommended to build form-groups used component "c-forms.jade"

Available Properties:

```
type // textarea, contenteditable, textarea and other as default (text, number, email, tel, password, checkbox, radio...)
custom_class // string or do not specify
form_group_class // string or do not specify
label_class // string or do not specify (if label exist)
placeholder // string or do not specify
required // true or do not specify
disabled // true or do not specify
checked // true or do not specify (for radios and checkoxes)
title // string or do not specify (for select)
options // array of objects (has txt, content and selected) (for select)
value // string or do not specify
label // string or do not specify
name // string or do not specify
id // string or do not specify
icon // ico name from sprites or do not specify
svg // svg name string or do not specify
clear_btn // true or do not specify
```

example using (jade):

```
include _includes/components/c-forms/c-forms
	form.js-form_check
		.row
			.col-md-12.col-xs-24
				+form-group({
					'type': 'text',
					'form_group_class': 'some-form-group-class',
					'name':'user_name',
					'placeholder': 'User name',
					'value': 'John Smith',
					'required': true
				})
			.col-md-12.col-xs-24
				+form-group({
					'type': 'email',
					'name':'user_email',
					'placeholder': 'User email',
					'required': true
				})
			.col-md-12.col-xs-24
				+form-group({
					'type': 'number',
					'name':'user_age',
					'placeholder': 'User Age',
					'required': true
				})
			.col-md-12.col-xs-24
				+form-group({
					'type': 'tel',
					'name':'user_tel',
					'placeholder': 'User Age',
					'required': true
				})
			.col-md-12.col-xs-24
				+form-group({
					'type': 'select',
					'name':'user_select',
					'custom_class':'some-select-class',
					'title': 'Select something',
					'options':[
						{
							'txt':'Lorem'
						},
						{
							'txt':'Ipsum'
						},
						{
							'txt':'Dolor'
						}
					]
				})
			.col-md-12.col-xs-24
				+form-group({
					'type': 'select',
					'name':'user_select',
					'custom_class':'some-select-class',
					'title': 'Select something',
					'options':[
						{
							'selected':true,
							'txt':'Per Aspera',
							'content':'Per <b>Aspera</b>'
						},
						{
							'txt':'Ad Astra',
							'content':'Ad <b>Astra</b>'
						}
					]
				})
			.col-xs-24
				+form-group({
					'type': 'textarea',
					'name':'user_msg',
					'custom_class':'some-class',
					'placeholder': 'Message',
					'required': true
				})
			.col-xs-24
				+form-group({
					'type': 'checkbox',
					'name':'user_success',
					'custom_class':'some-input-class',
					'label_class':'some-label-class',
					'value':'CHECK ME!!!!!!'
				})
			.col-xs-24
				+form-group({
					'type': 'radio',
					'name':'user_radio',
					'value': 'Parameter 1',
				})
				+form-group({
					'type': 'radio',
					'name':'user_radio',
					'value': 'Parameter 2',
				})
				+form-group({
					'type': 'radio',
					'name':'user_radio',
					'value': 'Parameter 3',
					'checked': true
				})

```

Result (html):
```
<form class="js-form_check">
  <div class="row">
    <div class="col-md-12 col-xs-24">
      <div class="form-group">
        <div class="input-wrap">
          <input type="text" name="user_name" placeholder="User name" value="John Smith" required="" class="form-control">
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xs-24">
      <div class="form-group">
        <div class="input-wrap">
          <input type="email" name="user_email" placeholder="User email" value="" required="" class="form-control">
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xs-24">
      <div class="form-group">
        <div class="input-wrap">
          <input type="number" name="user_age" placeholder="User Age" value="" required="" class="form-control">
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xs-24">
      <div class="form-group">
        <div class="input-wrap">
          <input type="tel" name="user_tel" placeholder="User Age" value="" required="" class="form-control">
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xs-24">
      <div class="form-group">
        <div class="select-wrap">
          <select title="Select something" class="selectpicker some-select-class">
            <option>Lorem</option>
            <option>Ipsum</option>
            <option>Dolor</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-xs-24">
      <div class="form-group">
        <div class="select-wrap">
          <select title="Select something" class="selectpicker some-select-class">
            <option selected="selected" data-content="Per <b>Aspera</b>">Per Aspera</option>
            <option data-content="Ad <b>Astra</b>">Ad Astra</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-xs-24">
      <div class="form-group">
        <div class="input-wrap">
          <textarea name="user_msg" placeholder="Message" required="" class="form-control some-class"></textarea>
        </div>
      </div>
    </div>
    <div class="col-xs-24">
      <div class="form-group">
        <label class="checkbox-label some-label-class">
          <input type="checkbox" name="user_success" value="CHECK ME!!!!!!" class="hidden-input some-input-class"><span class="check-icon"></span><span class="check-value">CHECK ME!!!!!!</span>
        </label>
      </div>
    </div>
    <div class="col-xs-24">
      <div class="form-group">
        <label class="radio-label">
          <input type="radio" name="user_radio" value="Parameter 1" class="hidden-input"><span class="check-icon"></span><span class="check-value">Parameter 1</span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-label">
          <input type="radio" name="user_radio" value="Parameter 2" class="hidden-input"><span class="check-icon"></span><span class="check-value">Parameter 2</span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-label">
          <input type="radio" name="user_radio" checked="" value="Parameter 3" class="hidden-input"><span class="check-icon"></span><span class="check-value">Parameter 3</span>
        </label>
      </div>
    </div>
  </div>
</form>

```