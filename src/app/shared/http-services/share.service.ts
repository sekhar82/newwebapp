import { Injectable } from '@angular/core';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private client = new SESv2Client({ region: "us-east-2", credentials: { accessKeyId: '', secretAccessKey: '' } });
  constructor(private toast: ToastrService) { }


  async sendSESMail(subject: any, template: any) {
    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: ['info@valiantedgetech.com'],
      }, Content: {
        Simple: {
          Subject: { Charset: 'UTF-8', Data: subject },
          Body: {
            Html: {
              Charset: 'UTF-8',
              Data: template
            }
          }
        }
      },

      FromEmailAddress: 'info@valiantedgetech.com',
    });
    try {
      await this.client.send(command);
      this.toast.success('Data send/submit successfully.', 'Success')
      return
    } catch (error) {
      this.toast.error('Somethig went worng ! Please try after sometimes.', 'Faild')
      return
    }
  }
}
