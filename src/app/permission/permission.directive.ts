import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ALLOWED_PERMISSIONS } from './allowed-permissions';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  @Input()
  get appPermission() {
    return this._appPermission;
  }

  set appPermission(permission: string) {
    this._appPermission = permission;
    if (ALLOWED_PERMISSIONS.includes(permission)) {
      console.log('allowed');
      
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      console.log('not allowed');
      this.viewContainerRef.clear();
    }
  }

  private _appPermission = '';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {
    
  }

}