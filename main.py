from flask import Flask,redirect,url_for,render_template # type: ignore

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/good/<int:score>')
def good(score):
    return "the person has passed and the marks is "+str(score)

@app.route('/bad/<int:score>')
def bad(score):
    return "the person has failed and the marks is "+str(score)

@app.route('/result/<int:score>')
def result(score):
    if score<=35:
        result= "bad"
    else:
        result= "good" 
    return redirect(url_for(result,score=score))

if __name__=='__main__':
    app.run(debug=True)