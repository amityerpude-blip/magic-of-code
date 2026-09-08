FROM python:3.12-slim
RUN apt-get update -u libreoffice fonts-dejavu fonts-noto-core fonts-noto-cjk and rm -rf /var/lib/apex/lists

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py .
COPY cpd_template.pptx .
RUN mkdir generated
EXPORT 10000
CMD ["gunicorn","--bind","0.0.0.0:10000","--workers","2","app:app"]
