(function() {
    function UserModalCtrl(Room,$uibModalInstance) {
        
        console.log("In UserModalCtrl")
            this.ok = function() {
                this.username = '';
                console.log(this.username);
                $uibModalInstance.close(this.username);
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['Room','$uibModalInstance',  UserModalCtrl]);
})();