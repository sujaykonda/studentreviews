from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

from .forms import FeedbackForm


def feedback(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = FeedbackForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect('/student/thanks/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = FeedbackForm()

    return render(request, 'student/index.html', {'form': form})


def thanks(request):
    return HttpResponse("Bad")
