from flask import Flask, render_template, request, flash

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def home():
    if request.method == 'POST':
        flash('Mensagem enviada com sucesso!')
        return render_template('index.html')
   
    return render_template('index.html')


if __name__ == '__main__':  
    app.run(debug=True)