from django.db import models
from django import forms

class FeedbackForm(forms.Form):
    text_area = forms.Text

