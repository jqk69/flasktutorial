from flask import Flask,redirect,url_for,render_template,request # type: ignore

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/submit',methods=['POST','GET'])
def submit():
    if request.method=='POST':
        mark1=float(request.form['mark1'])
        mark2=float(request.form['mark2'])
        mark3=float(request.form['mark3'])
        mark4=float(request.form['mark4'])
        total=mark1+mark2+mark3+mark4
    if total >= 50:
        res ="good"
    else:
        res ="bad"
    return redirect(url_for(res,score=total))

@app.route('/bad/<int:score>')
def bad(score):
    return render_template("failure.html",score=score)
@app.route('/good/<int:score>')
def good(score):
    return render_template('success.html',total=score)


if __name__=='__main__':
    app.run(debug=True)